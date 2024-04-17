// #todo

'use strict';

/**
 * removes all odd numbers from an array of numbers
 * does not modify the argument (no side-effects)
 * @param {number[]} arrayOfNumbers - the array of numbers to filter
 * @returns {number[]} an array with only even numbers
 */

// -------- your solutions --------


const solution2 = (arr = []) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('arr is not an Array');
  }
  const isAllNumbers = arr.some((item) => typeof item !== 'number');
  if (isAllNumbers) {
    throw new TypeError('arr do not contain only number');
  }
  return arr.filter(item => item % 2 === 0);
};


const solution1 = (arr = []) => {
  const newArr = [];
  if (!Array.isArray(arr)) {
    throw new TypeError('arr is not an Array');
  }
  const isAllNumbers = arr.some((item) => typeof item !== 'number');
  if (isAllNumbers) {
    throw new TypeError('arr do not contain only number');
  }
  for (const item of arr) {
    if (item % 2 === 0) {
      newArr.push(item);
    }
  }
  return newArr;
};

for (const solution of [secretSolution, solution1, solution2]) {
  describe(solution.name + ': new array with even number', () => {
    describe('array with numbers', () => {
      it('array with only even number -> return all the numbers', () => {
        expect(solution([2, 4])).toEqual([2, 4]);
      });
      it('array with odd an even numbers -> return even numbers', () => {
        expect(solution([1, 2, 8, 7, 13, 16])).toEqual([2, 8, 16]);
      });
      it('array with negativ positive numbers -> return positiv and negativ even numbers', () => {
        expect(solution([1, 2, -8, 7, 13, -16])).toEqual([2, -8, -16])
      })
    });
    describe('different Error test', () => {
      it('argument is not an array', () => {
        expect(() => solution('not an array')).toThrow(TypeError);
      })
      it('array do not contain only number', () => {
        expect(() => solution([1, 2, 'not a num', 4])).toThrow(TypeError);
      })
      it('arr is multidimensional array', () => {
        expect(() => solution([1, 2, [3, 4, 'test'], 8, 9])).toThrow(TypeError);
      })
    })
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfNumbers is not an array"); } const b = a.some(a => "number" != typeof a); if (b) { throw new TypeError("arrayOfNumbers does not contain only numbers"); } const c = a.filter(a => 0 == a % 2); return c }
