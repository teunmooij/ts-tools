import type { Key } from './basic';
import type { ValueOf } from './object';
import type { Split } from './template-strings';

export type NestedKeys<TObject, TSeparator extends string = '.'> = TObject extends object
  ?
      | (keyof TObject & string)
      | ValueOf<{ [K in keyof TObject & string]: `${K}${TSeparator}${NestedKeys<TObject[K], TSeparator>}` }>
  : never;

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

export type FlattenKeys<TObject, TSeparator extends string = '.'> = TObject extends object
  ?
      | ValueOf<{ [K in keyof TObject & string]: TObject[K] extends object ? never : K }>
      | ValueOf<{
          [K in keyof TObject & string]: TObject[K] extends ReadonlyArray<infer E>
            ? E extends object
              ? `${K}${TSeparator}${number}${TSeparator}${FlattenKeys<E, TSeparator>}`
              : `${K}${TSeparator}${number}`
            : `${K}${TSeparator}${FlattenKeys<TObject[K], TSeparator>}`;
        }>
  : never;

export type Flatten<TObject, TSeparator extends string = '.'> = {
  [K in FlattenKeys<TObject, TSeparator>]: ValueAtPath<TObject, Split<K, TSeparator>>;
};
