import { reduceAsync } from '../src';
import { expectTypes, sleep } from './test-utils';

describe('array tests', () => {
  it('asynchonously reduces an array', async () => {
    const array = [1, 2, 3, 4, 5];

    const reduced = await reduceAsync(
      array,
      async value => {
        await sleep(10);
        return value * 2;
      },
      (acc, val) => acc + val,
      0,
    );

    expect(reduced).toEqual(30);
  });

  it('asynchonously reduces an array to an object', async () => {
    const array: ['foo' | 'bar' | 'baz', number][] = [
      ['foo', 1],
      ['bar', 2],
      ['baz', 3],
    ];

    const reduced = await reduceAsync(
      array,
      async ([key, value]) => {
        await sleep(10);
        return `${key}: ${value}`;
      },
      (acc, val, [key]) => {
        acc[key] = val;
        return acc;
      },
      {} as Record<'foo' | 'bar' | 'baz', string>,
    );

    expect(reduced).toEqual({
      foo: 'foo: 1',
      bar: 'bar: 2',
      baz: 'baz: 3',
    });

    expectTypes<typeof reduced, Record<'foo' | 'bar' | 'baz', string>>().toBeEqual();
  });
});
