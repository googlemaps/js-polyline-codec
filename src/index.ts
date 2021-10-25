/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** Object with lat and lng properties. */
export interface LatLng {
  lat: number;
  lng: number;
}

/**
 * Array with lat and lng elements.
 */
export type LatLngTuple = [number, number];

/**
 * Decodes an encoded path string into a sequence of LatLngs.
 *
 * See {@link https://developers.google.com/maps/documentation/utilities/polylinealgorithm}
 *
 *  #### Example
 *
 * ```js
 * import { decode } from "@googlemaps/polyline-codec";
 *
 * const encoded = "_p~iF~ps|U_ulLnnqC_mqNvxq`@";
 * console.log(decode(encoded, 5));
 * // [
 * //   [38.5, -120.2],
 * //   [40.7, -120.95],
 * //   [43.252, -126.453],
 * // ]
 * ```
 */
export const decode = function (
  encodedPath: string,
  precision = 5
): LatLngTuple[] {
  const factor = Math.pow(10, precision);

  const len = encodedPath.length;

  // For speed we preallocate to an upper bound on the final length, then
  // truncate the array before returning.
  const path = new Array(Math.floor(encodedPath.length / 2));
  let index = 0;
  let lat = 0;
  let lng = 0;
  let pointIndex = 0;

  // This code has been profiled and optimized, so don't modify it without
  // measuring its performance.
  for (; index < len; ++pointIndex) {
    // Fully unrolling the following loops speeds things up about 5%.
    let result = 1;
    let shift = 0;
    let b: number;
    do {
      // Invariant: "result" is current partial result plus (1 << shift).
      // The following line effectively clears this bit by decrementing "b".
      b = encodedPath.charCodeAt(index++) - 63 - 1;
      result += b << shift;
      shift += 5;
    } while (b >= 0x1f); // See note above.
    lat += result & 1 ? ~(result >> 1) : result >> 1;

    result = 1;
    shift = 0;
    do {
      b = encodedPath.charCodeAt(index++) - 63 - 1;
      result += b << shift;
      shift += 5;
    } while (b >= 0x1f);
    lng += result & 1 ? ~(result >> 1) : result >> 1;

    path[pointIndex] = [lat / factor, lng / factor];
  }
  // truncate array
  path.length = pointIndex;

  return path;
};

/**
 * Polyline encodes an array of objects having lat and lng properties.
 *
 * See {@link https://developers.google.com/maps/documentation/utilities/polylinealgorithm}
 *
 * #### Example
 *
 * ```js
 * import { encode } from "@googlemaps/polyline-codec";
 *
 * const path = [
 *   [38.5, -120.2],
 *   [40.7, -120.95],
 *   [43.252, -126.453],
 * ];
 * console.log(encode(path, 5));
 * // "_p~iF~ps|U_ulLnnqC_mqNvxq`@"
 * ```
 */
export const encode = function (
  path: (number[] | LatLng | LatLngTuple)[],
  precision = 5
): string {
  const factor = Math.pow(10, precision);

  const transform = function latLngToFixed(
    latLng: LatLng | LatLngTuple
  ): [number, number] {
    if (!Array.isArray(latLng)) {
      latLng = [latLng.lat, latLng.lng];
    }

    return [round(latLng[0] * factor), round(latLng[1] * factor)];
  };

  return polylineEncodeLine(path, transform);
};

/**
 * Encodes a generic polyline; optionally performing a transform on each point
 * before encoding it.
 *
 * @ignore
 */
export const polylineEncodeLine = function (
  array: (number[] | LatLng | LatLngTuple)[],
  transform: (latLng: number[] | LatLng | LatLngTuple) => [number, number]
): string {
  const v: string[] = [];
  let start = [0, 0];
  let end;
  for (let i = 0, I = array.length; i < I; ++i) {
    // In order to prevent drift (from quantizing deltas), we explicitly convert
    // coordinates to fixed-precision to obtain integer deltas.
    end = transform(array[i]);

    // Push the next edge
    polylineEncodeSigned(round(end[0]) - round(start[0]), v); // lat
    polylineEncodeSigned(round(end[1]) - round(start[1]), v); // lng
    start = end;
  }

  return v.join("");
};

/**
 * Encodes the given value in our compact polyline format, appending the
 * encoded value to the given array of strings.
 *
 * @ignore
 */
const polylineEncodeSigned = function (
  value: number,
  array: string[]
): string[] {
  return polylineEncodeUnsigned(value < 0 ? ~(value << 1) : value << 1, array);
};

/**
 * Helper function for encodeSigned.
 *
 * @ignore
 */
const polylineEncodeUnsigned = function (
  value: number,
  array: string[]
): string[] {
  while (value >= 0x20) {
    array.push(String.fromCharCode((0x20 | (value & 0x1f)) + 63));
    value >>= 5;
  }
  array.push(String.fromCharCode(value + 63));
  return array;
};

/**
 * @ignore
 */
const round = (v: number) => {
  return Math.floor(Math.abs(v) + 0.5) * (v >= 0 ? 1 : -1);
};
