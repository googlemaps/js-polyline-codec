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
export declare type LatLngTuple = number[];
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
export declare const decode: (encodedPath: string, precision?: number) => LatLngTuple[];
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
export declare const encode: (path: (LatLng | LatLngTuple)[], precision?: number) => string;
/**
 * Encodes a generic polyline; optionally performing a transform on each point
 * before encoding it.
 *
 * @ignore
 */
export declare const polylineEncodeLine: (array: (LatLng | LatLngTuple)[], transform: (latLng: LatLng | LatLngTuple) => [number, number]) => string;
