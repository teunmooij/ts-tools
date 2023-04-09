import type { ValueOf } from './object';
import type { SplitFirst } from './template-strings';

export type NestedKeys<TObject, TSeparator extends string = '.'> = TObject extends object
  ?
      | (keyof TObject & string)
      | ValueOf<{ [K in keyof TObject & string]: `${K}${TSeparator}${NestedKeys<TObject[K], TSeparator>}` }>
  : never;

export type NestedValue<TSource, TKey extends string, TSeparator extends string = '.'> = TKey extends keyof TSource
  ? TSource[TKey]
  : SplitFirst<TKey, TSeparator>[0] extends keyof TSource
  ? NestedValue<TSource[SplitFirst<TKey, TSeparator>[0]], SplitFirst<TKey, TSeparator>[1], TSeparator>
  : never;

export type FlattenKeys<TObject, TSeparator extends string = '.'> = TObject extends object
  ?
      | ValueOf<{ [K in keyof TObject & string]: TObject[K] extends object ? never : K }>
      | ValueOf<{ [K in keyof TObject & string]: `${K}${TSeparator}${FlattenKeys<TObject[K], TSeparator>}` }>
  : never;

export type Flatten<TObject, TSeparator = '.'> = { [K in FlattenKeys<TObject, TSeparator>]: NestedValue<TObject, K, TSeparator> };
