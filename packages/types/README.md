[![author](https://img.shields.io/badge/author-Teun%20Mooij-blue)](https://www.linkedin.com/in/teunmooij/)
[![snyk](https://snyk.io/test/github/teunmooij/ts-tools/badge.svg)](https://snyk.io/test/github/teunmooij/ts-tools)
[![downloads](https://img.shields.io/npm/dt/ts-powertypes?color=blue)](https://www.npmjs.com/package/ts-powertypes)
[![npm version](https://badge.fury.io/js/ts-powertypes.svg)](https://www.npmjs.com/package/ts-powertypes)
[![license](https://img.shields.io/npm/l/ts-powertypes?color=blue)](https://img.shields.io/npm/l/ts-powertypes)

# ts-powertypes

Collection of typescript types

This package is work in progress and semantic versioning is not yet guaranteed. If you use this package, please make sure to set explcit version number in your package json.

## Install

```shell
npm install ts-powertypes
```

## Usage

```ts
import type { Flatten } from 'ts-powertypes';

type Book = {
  title: string;
  chapters: {
    title: string;
    content: Record<string, string>;
  }[];
};

type FlatBook = Flatten<Book>;
/*
{
  title: string;
  [x: `chapters.${number}.title`]: string;
  [x: `chapters.${number}.content.${string}]: string;
}
*/
```

## Api

### Object types

- `Primitive` union of all primitive typescript types
- `Key` union of primitive types that can be used as object keys

- `ElementType` gets the type of the elements of an Array, Map or Record

- `KeyOf` union of the keys of an object
- `ValueOf` union of the value types of an object
- `ObjectKeys` strong type for the return type of `Object.keys()`
- `ObjectValues` strong type for the return type of `Object.values()`
- `ObjectEntries` strong type for the return type of `Object.entries()`

- `Split` splits a string constant on a given separator
- `Join` joins a string constant on a given separator

- `Flatten` flattens an object structure
- `ObjectPaths` union of all key paths of an object
- `ValuesAtPath` value type of an object at a given patch

## Version history

See [changelog](./CHANGELOG.md)
