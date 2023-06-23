import { map } from '../src';
import { expectTypes } from './test-utils';


describe('record tests', () => {
  it('maps a record', () => {
    const myRecord = { foo: 1, bar: 2, baz: 3 };

    const mapped = map(myRecord, (value, key) => `${key}: ${value}`);

    expect(mapped).toEqual({
      foo: 'foo: 1',
      bar: 'bar: 2',
      baz: 'baz: 3',
    });

    expectTypes<typeof mapped, Record<'foo' | 'bar' | 'baz', string>>().toBeEqual();
  });

  it('maps an opbject to a record', () => {
    const myObject = { foo: 1, bar: true, baz: 'hello' };

    const mapped = map(myObject, (value, key) => `${key}: ${value}`);

    expect(mapped).toEqual({
      foo: 'foo: 1',
      bar: 'bar: true',
      baz: 'baz: hello',
    });

    expectTypes<typeof mapped, Record<'foo' | 'bar' | 'baz', string>>().toBeEqual();
  });
});
