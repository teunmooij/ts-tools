type Matcher<TActual, TExpected> = {
  toBeEqual: [TExpected] extends [TActual]
    ? [TActual] extends [TExpected]
      ? () => void
      : 'Actual does not extend Expected'
    : 'Expected does not extend Actual';
};

/**
 * Pass in types and call required matcher. If match fails, you'll get a type error.
 */
export const expectTypes = <TActual, TExpected>(): Matcher<TExpected, TActual> =>
  ({
    toBeEqual: () => {
      /* irrelevant */
    },
  } as Matcher<TExpected, TActual>);
