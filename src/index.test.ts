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

import { decode, encode } from "./index";

const CASES = {
  DEFAULT: [
    [38.5, -120.2],
    [40.7, -120.95],
    [43.252, -126.453],
  ],
  DEFAULT_MIXED: [
    [38.5, -120.2],
    { lat: 40.7, lng: -120.95 },
    [43.252, -126.453],
  ],
  DEFAULT_ROUNDED: [
    [39, -120],
    [41, -121],
    [43, -126],
  ],
  SLASHES: [
    [35.6, -82.55],
    [35.59985, -82.55015],
    [35.6, -82.55],
  ],
  FLIPPED: [
    [-120.2, 38.5],
    [-120.95, 40.7],
    [-126.453, 43.252],
  ],
  ROUNDING: [
    [0, 0.000006],
    [0, 0.000002],
  ],
  NEGATIVE: [
    [36.05322, -112.084004],
    [36.053573, -112.083914],
    [36.053845, -112.083965],
  ],
};

describe("decode", () => {
  test("decodes to an empty array", () => {
    expect(decode("")).toEqual([]);
  });

  test("decodes a string into an array of lat lng pairs", () => {
    expect(decode("_p~iF~ps|U_ulLnnqC_mqNvxq`@")).toEqual(CASES.DEFAULT);
  });

  test("decodes with a custom precision", () => {
    expect(decode("_izlhA~rlgdF_{geC~ywl@_kwzCn`{nI", 6)).toEqual(
      CASES.DEFAULT
    );
  });

  test("decodes with precision 0", () => {
    expect(decode("mAnFC@CH", 0)).toEqual(CASES.DEFAULT_ROUNDED);
  });
});

describe("roundtrip", () => {
  test("roundrip", () => {
    const encoded =
      "gcneIpgxzRcDnBoBlEHzKjBbHlG`@`IkDxIiKhKoMaLwTwHeIqHuAyGXeB~Ew@fFjAtIzExF";
    const decoded = decode(encoded, 5);

    expect(decoded).toMatchSnapshot();
    expect(encode(decoded, 5)).toEqual(encoded);
  });

  test("feed encode into decode and check if the result is the same as the input", () => {
    expect(decode(encode(CASES.SLASHES))).toEqual(CASES.SLASHES);
  });

  test("feed decode into encode and check if the result is the same as the input", () => {
    expect(encode(decode("_chxEn`zvN\\\\]]"))).toEqual("_chxEn`zvN\\\\]]");
  });
});

describe("encode", () => {
  test("encodes an empty Array", () => {
    expect(encode([])).toEqual("");
  });

  test("encodes an Array of lat/lon pairs into a String", () => {
    expect(encode(CASES.DEFAULT)).toEqual("_p~iF~ps|U_ulLnnqC_mqNvxq`@");
  });

  test("encodes with proper rounding", () => {
    expect(encode(CASES.ROUNDING)).toEqual("?A?@");
  });

  test("encodes array having lat lng objects", () => {
    expect(encode(CASES.DEFAULT_MIXED)).toEqual("_p~iF~ps|U_ulLnnqC_mqNvxq`@");
  });

  test("encodes with proper negative rounding", () => {
    expect(encode(CASES.NEGATIVE)).toEqual("ss`{E~kbkTeAQw@J");
  });

  test("encodes with a custom precision", () => {
    expect(encode(CASES.DEFAULT, 6)).toEqual(
      "_izlhA~rlgdF_{geC~ywl@_kwzCn`{nI"
    );
  });

  test("encodes with precision 0", () => {
    expect(encode(CASES.DEFAULT, 0)).toEqual("mAnFC@CH");
  });

  test("encodes negative values correctly", () => {
    expect(
      decode(encode([{ lng: -107.3741825, lat: 0 }], 7), 7)[0][1]
    ).toBeLessThan(0);
  });
});
