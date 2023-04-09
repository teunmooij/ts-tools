export type ElementType<T> = T extends ReadonlyArray<infer E>
  ? E
  : T extends Record<any, infer E>
  ? E
  : T extends Map<any, infer E>
  ? E
  : never;
