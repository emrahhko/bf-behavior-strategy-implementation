// #todo

'use strict';

/**
 * takes an array of strings and returns a new array of numbers
 *  the new array contains all the numbery strings, cast to numbers
 * does not modify the argument (no side-effects)
 * @param {string[]} arrayOfStrings - the array of strings
 * @returns {number[]} an array containing only numbers, and not NaN
 * @example
 *  ['1', '2', 'e', '.'] // --> [1, 2]
 */

// -------- your solutions --------

const solution2 = (strings = []) => {
  if (!Array.isArray(strings)) {
    throw new TypeError('parameter is not an array');
  }
  if (strings.some((item) => typeof item !== 'string')) {
    throw new TypeError('array do not contain only string type');
  }

  const numberOfArr = strings.map((num) => +num);
  const validNum = numberOfArr.filter((item) => !Number.isNaN(item));
  return validNum;
};

const solution1 = (strings = []) => {
  const newArr = [];
  if (!Array.isArray(strings)) {
    throw new TypeError('argument is not an array');
  }
  if (strings.some((item) => typeof item !== 'string')) {
    throw new TypeError("array doesn't contain only string");
  }
  strings.forEach((item) => {
    const num = Number(item);
    if (!Number.isNaN(num)) {
      newArr.push(num);
    }
  });
  return newArr;
};

for (const solution of [secretSolution, solution1, solution2]) {
  describe(
    solution.name +
      ' takes an array of strings and returns a new array of numbers',
    () => {
      describe('an array of strings and returns a new array of numbers', () => {
        it('with numbery items', () => {
          expect(solution(['1', '2', '3', '4'])).toEqual([1, 2, 3, 4]);
        });
        it('with numbery and non numbery items', () => {
          expect(solution(['1', '2', '3', '4', 'a', 'b', 'c'])).toEqual([
            1,
            2,
            3,
            4,
          ]);
        });
        it('with empty array', () => {
          expect(solution([])).toEqual([]);
        });
      });
      describe('different error type', () => {
        it('not an array as an argument', () => {
          expect(() => solution('not an array')).toThrow(TypeError);
        });
        it('with non string type of items in the array', () => {
          expect(() => solution([null, undefined, NaN, '1', 2])).toThrow(
            TypeError,
          );
        });
      });
    },
  );
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings contains non-strings"); } const c = a.map(a => +a), d = c.filter(a => !Number.isNaN(a)); return d }
