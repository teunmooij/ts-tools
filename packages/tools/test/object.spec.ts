import { objectEntries, objectKeys, objectValues } from '../src';

describe('object tests', () => {
  it('gets the keys of an object', () => {
    const obj = { foo: 1, bar: { baz: 'qux' } };

    const keys = objectKeys(obj);

    expect(keys).toEqual(['foo', 'bar']);
  });

  it('gets the values of an object', () => {
    const obj = { foo: 1, bar: { baz: 'qux' } };

    const keys = objectValues(obj);

    expect(keys).toEqual([1, { baz: 'qux' }]);
  });

  it('gets the entries of an object', () => {
    const obj = { foo: 1, bar: { baz: 'qux' } };

    const keys = objectEntries(obj);

    expect(keys).toEqual([
      ['foo', 1],
      ['bar', { baz: 'qux' }],
    ]);
  });
});
