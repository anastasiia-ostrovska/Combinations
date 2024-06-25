const getCombinations = require('./getArrOfCombinations');

describe('getArrOfCombinations function', () => {
  test('combinations should consist of unique values with passed string "abcd"', () => {
    const string = 'abcd';
    const combinations = getCombinations(string);
    const uniqueCombinations = new Set(combinations);

    expect(combinations.length).toBe(uniqueCombinations.size);
  });

  test('amount of combinations should match the formula "Math.pow(2, string.length-1)"', () => {
    const string = 'abcd';
    const combinations = getCombinations(string);
    const amount = Math.pow(2, string.length - 1);

    expect(combinations.length).toBe(amount);
  });

  test('there are should be 64 combinations with 7-letter string', () => {
    const string = 'abcdefg';
    const combinations = getCombinations(string);

    expect(combinations.length).toBe(64);
  });

  test('there are should be 512 combinations with 10-letter string', () => {
    const string = 'abcdefghij';
    const combinations = getCombinations(string);

    expect(combinations.length).toBe(512);
  });
});


