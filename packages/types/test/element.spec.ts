import type { ElementType } from '..';

import { expectTypes } from './test-utils';

describe('element tests', () => {
  it('gets the element type of an array', () => {
    type Expected = 'foo' | 'bar';

    type Actual = ElementType<('foo' | 'bar')[]>;

    expectTypes<Actual, Expected>().toBeEqual();
  });

  it('gets the element type of a readonly array', () => {
    type Expected = 'foo' | 'bar';

    type Actual = ElementType<ReadonlyArray<'foo' | 'bar'>>;

    expectTypes<Actual, Expected>().toBeEqual();
  });

  it('gets the element type of a record', () => {
    type Expected = 'foo' | 'bar';

    type Actual = ElementType<Record<string, 'foo' | 'bar'>>;

    expectTypes<Actual, Expected>().toBeEqual();
  });

  it('gets the element type of a map', () => {
    type Expected = 'foo' | 'bar';
    const map = new Map<string, 'foo' | 'bar'>();

    type Actual = ElementType<typeof map>;

    expectTypes<Actual, Expected>().toBeEqual();
  });

  it('returns `never` if given type is neither an array, record or map', () => {
    type Actual = ElementType<string>;

    expectTypes<Actual, never>().toBeEqual();
  });
});
