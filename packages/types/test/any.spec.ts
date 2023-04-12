import { IsAny } from '..';
import { expectType } from './test-utils';

describe('any tests', () => {
  it('is any', () => {
    expectType<IsAny<any>>().toBeTrue();
  });

  it('is not any', () => {
    expectType<IsAny<true>>().toBeFalse();
    expectType<IsAny<false>>().toBeFalse();
    expectType<IsAny<string>>().toBeFalse();
    expectType<IsAny<number>>().toBeFalse();
    expectType<IsAny<object>>().toBeFalse();
    expectType<IsAny<never>>().toBeFalse();
    expectType<IsAny<unknown>>().toBeFalse();
  });
});
