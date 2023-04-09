import type { KeyOf, ValueOf } from '..';

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
});
