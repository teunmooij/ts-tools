import { map, mapAsync } from '../src';
import { expectTypes, sleep } from './test-utils';

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

  it('asynchronously maps a record', async () => {
    const myRecord = { foo: 1, bar: 2, baz: 3 };

    const mapped = await mapAsync(myRecord, async (value, key) => {
      await sleep(10);
      return `${key}: ${value}`;
    });

    expect(mapped).toEqual({
      foo: 'foo: 1',
      bar: 'bar: 2',
      baz: 'baz: 3',
    });

    expectTypes<typeof mapped, Record<'foo' | 'bar' | 'baz', string>>().toBeEqual();
  });

  it('asynchronously maps an object to a record', async () => {
    const myObject = { foo: 1, bar: true, baz: 'hello' };

    const mapped = await mapAsync(myObject, async (value, key) => {
      await sleep(10);
      return `${key}: ${value}`;
    });

    expect(mapped).toEqual({
      foo: 'foo: 1',
      bar: 'bar: true',
      baz: 'baz: hello',
    });

    expectTypes<typeof mapped, Record<'foo' | 'bar' | 'baz', string>>().toBeEqual();
  });
});
