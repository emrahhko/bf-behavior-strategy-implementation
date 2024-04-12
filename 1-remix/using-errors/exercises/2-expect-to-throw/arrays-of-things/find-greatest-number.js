// #todo

// you can use this to check the argument
import { isArrayOfNumbers } from './is-array-of-numbers.js';

/**
 *
 * @param {*} numbers
 * @returns
 */
const findGreatestNumber = (numbers = []) => {
  if (!Array.isArray(numbers)) {
    throw new TypeError('Input is not an array');
  }
  return numbers.sort((a, b) => b - a)[0];
};