import type { Flatten, ObjectPaths, ValueAtPath } from '..';
import { expectTypes } from './test-utils';

describe('flatten tests', () => {
  describe('flatten', () => {
    it('flattens the nested structure', () => {
      type Given = { foo: string; bar: string; baz: { foo: number; bar: { baz: string }; qux: 'string' } };
      type Expected = {
        foo: string;
        bar: string;
        'baz.foo': number;
        'baz.bar.baz': string;
        'baz.qux': 'string';
      };

      type Actual = Flatten<Given>;

      expectTypes<Actual, Expected>().toBeEqual();
    });

    it('flattens a record', () => {
      type Given = Record<string, string>;
      type Expected = Given;

      type Actual = Flatten<Given>;

      expectTypes<Actual, Expected>().toBeEqual();
    });

    it('flattens anested record', () => {
      type Given = { foo: number; bar: Record<string, string> };
      type Expected = { foo: number; [x: `bar.${string}`]: string };

      type Actual = Flatten<Given>;

      expectTypes<Actual, Expected>().toBeEqual();
    });

    it('flattens an array', () => {
      type Given = { foo: string[]; bar: { baz: string }[] };
      type Expected = { [x: `foo.${number}`]: string; [x: `foo.${number}.baz`]: string };

      type Actual = Flatten<Given>;

      expectTypes<Actual, Expected>().toBeEqual();
    });
  });

  describe('objectPaths', () => {
    it('gets the paths from an object structure', () => {
      type Given = { foo: string; bar: string; baz: { foo: number; bar: { baz: string }; qux: 'string' } };
      type Expected = ['foo'] | ['bar'] | ['baz', 'foo'] | ['baz', 'bar', 'baz'] | ['baz', 'qux'];

      type Actual = ObjectPaths<Given>;

      expectTypes<Actual, Expected>().toBeEqual();
    });
  });

  describe('valueAtPath', () => {
    it('gets a value at a given path', () => {
      type Given = { foo: string; bar: string; baz: { foo: number; bar: { baz: string }; qux: 'string' } };
      type Expected = { baz: string };

      type Actual = ValueAtPath<Given, ['baz', 'bar']>;

      expectTypes<Actual, Expected>().toBeEqual();
    });
  });
});
