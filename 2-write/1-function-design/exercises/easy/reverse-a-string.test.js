// #todo

'use strict';

/**
 * reverses a string
 * @param {string} [toReverse=''] - the string to reverse
 * @returns {string} the reversed argument
 */

// -------- your solutions --------
const solution1 = (toReverse = '') => {
  let result = '';
  for (let i = 0; i < toReverse.length; i++) {
    result = toReverse[i] + result;
  }
  return result;
};

const solution2 = (toReverse = '') => {
  return toReverse.split('').reverse().join('');
};

const solutions = [solution1, solution2];

for (const solution of solutions) {
    // the main test suite for the function
    describe(solution.name + ': reverses a string', () => {
        it('default parameter is an empty string -> ""', () => {
            expect(solution()).toEqual('');
        });
        it('an empty string -> ""', () => {
            expect(solution('')).toEqual('');
        });
        it('a string with all capital letters', () => {
            expect(solution('ASDF')).toEqual('FDSA');
        });
                it('a string with many words', () => {
            expect(solution('salut toi')).toEqual('iot tulas');
        });
                        it('another one', () => {
            expect(solution('poules')).toEqual('seluop');
        });
        // write at least 5 more tests ...
    });
}

// minified solution for testing your tests
// prettier-ignore
// function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join("") }
