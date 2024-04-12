// #todo

// you can use this to check the argument
import { isArrayOfNumbers } from './is-array-of-numbers.js';

/**
 *
 * @param {*} numbers
 * @returns
 */

const sumNumbers = (numbers = []) => {  //Solution1
  return numbers.reduce((sum, num) => sum + num, 0);
};


const sumNumbers = (numbers = [] => { // Solution 2
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result = result + numbers[i];
  }
  return result;
}
