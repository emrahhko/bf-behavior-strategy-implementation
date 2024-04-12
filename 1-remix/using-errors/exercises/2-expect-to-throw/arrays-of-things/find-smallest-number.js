// #todo

// you can use this to check the argument
import { isArrayOfNumbers } from './is-array-of-numbers.js';

/**
 *
 * @param {*} numbers
 * @returns
 */
const findSmallestNumber = (numbers = []) => {
  if (!Array.isArray(numbers)) {
    throw new TypeError('Input is not an array');
  }
  return numbers.sort((a, b) => a - b)[0];
};

