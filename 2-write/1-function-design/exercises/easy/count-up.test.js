// #todo

'use strict';

/**
 * builds an array counting up from 0 to `max`
 * @param {number} [max=0] - the number to count up to
 *  max must be an integer that is greater than 0
 * @returns {number[]} an array of all numbers from 0 to `max`
 */

// -------- your solutions --------

// =============== Strategie ===============

/* -- iteration that will stop when reached the limit number given by the user (max) --
   -- each increased number will be add to an array --

  1. create a new empty array (result) to store the increased number
  2. iterate from 0 to max increasing by 1 in each iteration
    a. add each increased number to the array (result)
  return: the array (result)

*/

const secretSolution = (max = 0) => {
  let result = [];
  for (let i = 0; i <= max; i++) {
    result.push(i)
    
  }
  return result;
}


for (const solution of [secretSolution]) {
    // the main test suite for the function
    describe(solution.name + ': counts up from 0', () => {
        it('default parameter is 0 -> [0]', () => {
            const actual = solution();
            expect(actual).toEqual([0]);
        });
        it('0 -> [0]', () => {
            expect(solution(0)).toEqual([0]);
        });
        it('1 -> [0, 1]', () => {
            expect(solution(1)).toEqual([0, 1]);
        });
                it('2 -> [0, 2]', () => {
            expect(solution(1)).toEqual([0, 1]);
        });
                        it('3 -> [0, 3]', () => {
            expect(solution(1)).toEqual([0, 1]);
        });
                                it('4 -> [0, 4]', () => {
            expect(solution(1)).toEqual([0, 1]);
        });
                                        it('61 -> [0, 61]', () => {
            expect(solution(1)).toEqual([0, 1]);
        });
                                                it('99 -> [0, 99]', () => {
            expect(solution(1)).toEqual([0, 1]);
        });
                                                        it('99 -> [0, 101]', () => {
            expect(solution(1)).toEqual([0, 1]);
        });
        // write at least 5 more tests ...
    });
}

// minified solution for testing your tests
// prettier-ignore
// function secretSolution(a = 0) { if ("number" != typeof a) throw new TypeError("max is not a number"); if (!Number.isInteger(a)) throw new Error("max is not an integer"); if (0 > a) throw new RangeError("max is less than 0"); const b = []; for (let c = 0; c <= a; c++)b.push(c); return b }
