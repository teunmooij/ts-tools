import type { KeyOf, ObjectEntries, ObjectKeys, ObjectValues, ValueOf } from '..';

import { expectTypes } from './test-utils';

describe('object tests', () => {
  it('gets keys of the object', () => {
    type Expected = 'foo' | 'bar';

    type Actual = KeyOf<{ foo: 'string'; bar: { baz: string } }>;

    expectTypes<Actual, Expected>().toBeEqual();
  });

  it('gets values of the object', () => {
    type Expected = string | number | { foo: string };

    type Actual = ValueOf<{ bar: { foo: string }; foo: string; baz: number }>;

    expectTypes<Actual, Expected>().toBeEqual();
  });

  it('gets an array of object keys', () => {
    type Given = { foo: string; bar: number };
    type Expected = ('foo' | 'bar')[];

    type Actual = ObjectKeys<Given>;

    expectTypes<Actual, Expected>().toBeEqual();
  });

  it('gets an array of object values', () => {
    type Given = { foo: string; bar: number };
    type Expected = (string | number)[];

    type Actual = ObjectValues<Given>;

    expectTypes<Actual, Expected>().toBeEqual();
  });

  it('gets an array of object entries', () => {
    type Given = { foo: string; bar: number };
    type Expected = (['foo', string] | ['bar', number])[];

    type Actual = ObjectEntries<Given>;

    expectTypes<Actual, Expected>().toBeEqual();
  });

  it('gets the object entries for a record type', () => {
    type Given = Record<string, number>;
    type Expected = [string, number][];

    type Actual = ObjectEntries<Given>;

    expectTypes<Actual, Expected>().toBeEqual();
  });
});
