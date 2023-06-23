import { Key } from 'ts-powertypes';
import { objectEntries } from './object';

export const map = <T, U, R extends Record<Key, T>>(rec: R, fn: (val: T, key: keyof R, rec: R) => U): Record<keyof R, U> =>
  objectEntries(rec).reduce((acc, [key, val]) => {
    acc[key] = fn(val, key, rec);
    return acc;
  }, {} as any);
