// #todo

'use strict';

/**
 * A function that takes an array of strings, reverses it, and combines the strings
 * it does not modify the original array
 * @param {string[]} arrayOfStrings - an array of strings to concatenate, in reverse order
 * @returns {string} - the array elements joined together, in reverse order
 */

// -------- your solutions --------

const solution1 = (strings = []) => {
  if (!Array.isArray(strings)) {
    throw new TypeError('arguments is not an array');
  }
  const isAllStrings = strings.some((item) => typeof item !== 'string');
  if (isAllStrings) {
    throw new TypeError('arr do not contain onyl string');
  }
  let result = '';
  strings.forEach((item) => {
    result = String(item) + result;
  });
  return result;
};

for (const solution of [secretSolution, solution1]) {
  describe(
    solution.name +
      ': function that takes an array, reverse, and combines the strings',
    () => {
      describe('A function that takes an array of strings, reverses it, and combines the strings', () => {
        it('with only strings', () => {
          expect(solution(['a', 'b', 'c', 'd'])).toEqual('dcba');
        });
      });
      describe('different error type', () => {
        it('argument is not an array', () => {
          expect(() => solution('not an array')).toThrow(TypeError);
        });
        it('array do not contain only string', () => {
          expect(() => solution(['a', 'b', 'c', 3, 4])).toThrow(TypeError);
        });
      });
    },
  );
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings does not contain only strings"); } return [...a].reverse().reduce((a, b) => a + b, "") }
