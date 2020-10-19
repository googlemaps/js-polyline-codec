# Google Maps JavaScript Polyline Encoding

[![npm](https://img.shields.io/npm/v/@googlemaps/polyline-codec)](https://www.npmjs.com/package/@googlemaps/polyline-codec)
![Build](https://github.com/googlemaps/js-polyline-codec/workflows/Build/badge.svg)
![Release](https://github.com/googlemaps/js-polyline-codec/workflows/Release/badge.svg)
[![codecov](https://codecov.io/gh/googlemaps/js-polyline-codec/branch/main/graph/badge.svg)](https://codecov.io/gh/googlemaps/js-polyline-codec)
![GitHub contributors](https://img.shields.io/github/contributors/googlemaps/js-polyline-codec?color=green)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![](https://github.com/jpoehnelt/in-solidarity-bot/raw/main/static//badge-flat.png)](https://github.com/apps/in-solidarity)

## Description

Encode and decode polyines in Nodejs or the browser using this package.

Polyline encoding is a lossy compression algorithm that allows you to store a series of coordinates as a single string. Point coordinates are encoded using signed values.

Read more at https://developers.google.com/maps/documentation/utilities/polylinealgorithm.

## Install

Available via npm as the package [@googlemaps/polyline-codec](https://www.npmjs.com/package/@googlemaps/polyline-codec).

`npm i @googlemaps/polyline-codec`

## Documentation

The reference documentation can be found at this [link](https://googlemaps.github.io/js-polyline-codec/index.html).

## Example

```js
import { decode, encode } from "@googlemaps/polyline-codec";

const encoded = "_p~iF~ps|U_ulLnnqC_mqNvxq`@";
console.log(decode(encoded, 5));
// [
//   [38.5, -120.2],
//   [40.7, -120.95],
//   [43.252, -126.453],
// ]

const path = [
  [38.5, -120.2],
  [40.7, -120.95],
  [43.252, -126.453],
];
console.log(encode(path, 5));
// "_p~iF~ps|U_ulLnnqC_mqNvxq`@"
```
