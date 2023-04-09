import { Flatten } from '..';
import { expectTypes } from './test-utils';

describe('flatten tests', () => {
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
});
