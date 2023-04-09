import { Split, SplitFirst } from '..';
import { expectTypes } from './test-utils';

describe('template strings tests', () => {
  it('splits the string type on the given separator', () => {
    type Given = 'abc;de.f;ghi';
    type Expected = ['abc', 'de.f', 'ghi'];

    type Actual = Split<Given, ';'>;

    expectTypes<Actual, Expected>().toBeEqual();
  });

  it('splits the string type on the dot when no separator is provided', () => {
    type Given = 'abc.de.f;ghi';
    type Expected = ['abc', 'de', 'f;ghi'];

    type Actual = Split<Given>;

    expectTypes<Actual, Expected>().toBeEqual();
  });

  it('splits on multi character separator', () => {
    type Given = 'abc;de.f;ghi';
    type Expected = ['abc', 'ghi'];

    type Actual = Split<Given, ';de.f;'>;

    expectTypes<Actual, Expected>().toBeEqual();
  });

  it('splits every char when empty string is provided as separator', () => {
    type Given = 'abc;de.f;ghi';
    type Expected = ['a', 'b', 'c', ';', 'd', 'e', '.', 'f', ';', 'g', 'h', 'i'];

    type Actual = Split<Given, ''>;

    expectTypes<Actual, Expected>().toBeEqual();
  });

  it('splits on the first occurence of the separator', () => {
    type Given = 'abc;de.f;ghi';
    type Expected = ['abc', 'de.f;ghi'];

    type Actual = SplitFirst<Given, ';'>;

    expectTypes<Actual, Expected>().toBeEqual();
  });
});
