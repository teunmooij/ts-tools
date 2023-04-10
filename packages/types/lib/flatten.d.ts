import type { Key } from './basic';
import type { ValueOf } from './object';
import type { Join, Split } from './template-strings';

type Unwrap<T> = T extends `${number}` ? (`${number}` extends T ? number : T) : T;

export type ValueAtPath<TSource, TPath extends Key[]> = TPath extends []
  ? TSource
  : TPath extends [infer Head, ...infer Tail]
  ? Tail extends Key[]
    ? Unwrap<Head> extends keyof TSource
      ? ValueAtPath<TSource[Unwrap<Head>], Tail>
      : never
    : never
  : never;

export type ObjectPaths<TObject> = TObject extends object
  ?
      | ValueOf<{ [K in keyof TObject & string]: TObject[K] extends object ? never : [K] }>
      | ValueOf<{
          [K in keyof TObject & string]: TObject[K] extends ReadonlyArray<infer E>
            ? E extends object
              ? [K, number, ...ObjectPaths<E>]
              : [K, number]
            : [K, ...ObjectPaths<TObject[K]>];
        }>
  : never;

type PathToString<T, TSeparator extends string> = T extends any ? Join<T, TSeparator> : never;

/**
 * Flattens an object structure
 */
export type Flatten<TObject, TSeparator extends string = '.'> = {
  [K in PathToString<ObjectPaths<TObject>, TSeparator>]: ValueAtPath<TObject, Split<K, TSeparator>>;
};
