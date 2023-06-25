import { Key } from 'ts-powertypes';
import { objectEntries } from './object';
import { reduceAsync } from './array';

export const map = <T, U, R extends Record<Key, T>>(rec: R, fn: (val: T, key: keyof R, rec: R) => U): Record<keyof R, U> =>
  objectEntries(rec).reduce((acc, [key, val]) => {
    acc[key] = fn(val, key, rec);
    return acc;
  }, {} as any);

export const mapAsync = async <T, U, R extends Record<Key, T>>(
  rec: R,
  fn: (val: T, key: keyof R, rec: R) => Promise<U>,
): Promise<Record<keyof R, U>> =>
  reduceAsync(
    objectEntries(rec),
    ([key, val]) => fn(val, key, rec),
    (acc, val, [key]) => {
      acc[key] = val;
      return acc;
    },
    {} as Record<keyof R, U>,
  );
