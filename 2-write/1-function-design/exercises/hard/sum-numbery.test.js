// #todo

'use strict';

/**
 * sums all numbery strings in an array of strings
 * returns 0 if the array is empty
 * it does not modify the original array (no side-effects)
 * @param {string[]} arr - the array of strings
 * @returns {number} the sum of all numbery strings
 */

// -------- your solutions --------

const solution2 = (strings = []) => {
  if (!Array.isArray(strings)) {
    throw new TypeError('arg is not an array');
  }

  if (strings.some((item) => typeof item !== 'string')) {
    throw new TypeError('array do not containt only string');
  }

  return strings.reduce((acc, next) => acc + Number(next), 0);
};

const solution1 = (strings = []) => {
  const newArr = [...strings];
  if (!Array.isArray(strings)) {
    throw new TypeError('parameter is not an array');
  }

  const isNotAllString = newArr.some((item) => typeof item !== 'string');
  if (isNotAllString) {
    throw new TypeError('array contain non-string');
  }
  let result = 0;
  newArr.forEach((item) => {
    result = result + Number(item);
  });
  return result;
};

const mapFilterReduce = (arr) => {
  // these work, you need to pass them to the right array methods
  const isNotNaN = (entry) => !Number.isNaN(entry);
  const sumNumbers = (acc, next) => acc + next;
  const castToNumber = (entry) => Number(entry);

  // fill in the array methods and pass in the correct logic
  const sumOfNumberies = arr
    .map(castToNumber(entry))
    .filter(isNotNaN(entry))
    .reduce(sumNumbers, acc + next);

  return sumOfNumberies;
};

// -------- your solutions --------

for (const solution of [
  secretSolution,
  solution1,
  solution2,
  // mapFilterReduce,
]) {
  describe(solution.name + 'sums all numbery strings in an array', () => {
    describe('sums all numbery strings', () => {
      it('with numbery items', () => {
        expect(solution(['1', '2', '3', '4'])).toEqual(10);
      });
      it('with numbery items 2', () => {
        expect(solution(['5', '6', '5'])).toEqual(16);
      });
    });
    describe('different error type', () => {
      it('parameter is not an array', () => {
        expect(() => solution('not')).toThrow(TypeError);
      });
      it('array contain different type', () => {
        expect(() => solution([2, '3', 6, null, undefined, NaN])).toThrow(
          TypeError,
        );
      });
    });
  });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arr is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arr contains non-strings"); } const c = a.map(a => +a).filter(a => !Number.isNaN(a)).reduce((a, b) => a + b, 0); return c }
