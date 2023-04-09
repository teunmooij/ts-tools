export type SplitFirst<
  TValue extends string,
  TSeparator extends string = '.',
> = TValue extends `${infer left}${TSeparator}${infer rest}` ? [left, rest] : [TValue];

export type Split<
  TValue extends string,
  TSeparator extends string = '.',
> = TValue extends `${infer left}${TSeparator}${infer rest}`
  ? rest extends ''
    ? [left]
    : [left, ...Split<rest, TSeparator>]
  : [TValue];
