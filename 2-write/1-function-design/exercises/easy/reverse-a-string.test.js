// #todo

'use strict';

/**
 * reverses a string
 * @param {string} [toReverse=''] - the string to reverse
 * @returns {string} the reversed argument
 */

// -------- your solutions --------

// =============== Strategie solution1 ===============

/* -- iteration that will append backward each character by the user given word --

  1. create a new empty string (toReverse) to store the reversed word
  2. iterate (for loop) each character by the given word and append each character to toReverse
  give the value of toReverse at result
  return result.

*/

// =============== Strategie solution2 ===============

/* -- split, reverse, and join the user given word and append it to toReverse --

  1. return  the splited, reversed, and joined word appended to toReverse 

*/

// =============== Strategie solution3 ===============

/* -- iteration that will append backward each character by the user given word --

  1. create a new empty string (toReverse) to store the reversed word
  2. iterate (for of loop) each character by the given word and append each character to toReverse
  give the value of toReverse at result
  return result.

*/

// =============== Strategie solution4 ===============

/* -- return, toReverse that  store the splited, reversed, and joined and appened word --

*/


// Solution 1
const solution1 = (toReverse = '') => {
  let result = '';
  for (let i = 0; i < toReverse.length; i++) {
    result = toReverse[i] + result;
  }
  return result;
};


// Solution 2
const solution2 = (toReverse = '') => {
  return toReverse.split('').reverse().join('');
};


// Solution 3
const solution3 = (toReverse = '') => {
  let result = '';
  for (const chars of toReverse) {
    result = chars + result;
  }
  return result;
}

// Solution4
const solution4 = (toReverse = '') => toReverse.split('').reverse().join('');


const solutions = [solution1, solution2, solution3, solution4];

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
                                it(' and another one', () => {
            expect(solution('ici')).toEqual('ici');
        });
        // write at least 5 more tests ...
    });
}

// minified solution for testing your tests
// prettier-ignore
// function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join("") }
