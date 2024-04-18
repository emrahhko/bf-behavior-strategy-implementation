/**
 * sums all even numbers in an array
 * @param {array} arr - an array of numbers
 * @returns {number} - the sum of all even numbers in argument
 */

export const filterReduce = (arr) => {
  if (arr === []) {
    return arr;
  }
  if (!Array.isArray(arr)) {
    throw new TypeError('argument is not an array');
  }
  if (arr.some(item => typeof item !== 'number')) {
    throw new TypeError('array do not containt only number');
  }
  const filteredArr = arr.filter((num) => num % 2 === 0);
  const result = filteredArr.reduce((sum, num) => sum + num, 0);
  return result;
};
