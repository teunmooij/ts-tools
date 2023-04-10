import type { Primitive } from './basic';

type TemplatePrimitive = Exclude<Primitive, symbol>;

export type Split<
  TValue extends string,
  TSeparator extends string = '.',
> = TValue extends `${infer left}${TSeparator}${infer rest}`
  ? rest extends ''
    ? [left]
    : [left, ...Split<rest, TSeparator>]
  : [TValue];

export type Join<T, TSeparator extends string = ''> = T extends [infer first, ...infer rest]
  ? [] extends rest
    ? `${first & TemplatePrimitive}`
    : `${first & TemplatePrimitive}${TSeparator}${Join<rest, TSeparator> & TemplatePrimitive}`
  : never;
