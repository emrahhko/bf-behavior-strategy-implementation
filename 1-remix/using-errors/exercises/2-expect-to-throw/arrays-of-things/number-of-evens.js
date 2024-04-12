// #todo

// you can use this to check the argument
import { isArrayOfNumbers } from './is-array-of-numbers.js';

/**
 *
 * @param {*} numbers
 * @returns
 */
const numberOfEvens = (numbers = []) => {
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  return evenNumbers.length;
};
