type Matcher<TActual, TExpected> = {
  toBeEqual: [TExpected] extends [TActual]
    ? [TActual] extends [TExpected]
      ? () => void
      : 'Actual does not extend Expected'
    : 'Expected does not extend Actual';
};

type BooleanMatcher<TActual extends boolean> = TActual extends true
  ? TActual extends false
    ? { toBeTrue: 'Actual is a boolean'; toBeFalse: 'Actual is a boolean' }
    : { toBeTrue: () => void; toBeFalse: 'Actual is true' }
  : TActual extends false
  ? { toBeTrue: 'Actual is false'; toBeFalse: () => void }
  : { toBeTrue: 'Actual is not a boolean'; toBeFalse: 'Actual is not a boolean' };

/**
 * Pass in boolean type and call required matcher. If match fails, you'll get a type error.
 */
export const expectType = <TActual extends boolean>(): BooleanMatcher<TActual> =>
  ({
    toBeTrue: () => {
      /* irrelevant */
    },
    toBeFalse: () => {
      /* irrelevant */
    },
  } as any);

/**
 * Pass in types and call required matcher. If match fails, you'll get a type error.
 */
export const expectTypes = <TActual, TExpected>(): Matcher<TExpected, TActual> =>
  ({
    toBeEqual: () => {
      /* irrelevant */
    },
  } as Matcher<TExpected, TActual>);
