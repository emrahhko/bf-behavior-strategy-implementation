/**
 * Determines if each number in an array is even or odd.
 *   This is a pure function with no side-effects.
 *
 * @param {number[]} [nums=[]] - An array of numbers.
 * @returns {string[]} - An array with the same number of entries as nums.
 *    Each number has been replaced with "even" or "odd".
 *
 * @example
 *
 * evenOrOdd([1, 2]); // ['odd', 'even']
 */
export const evenOrOdd = (nums = []) => {
  if (!Array.isArray(nums)) {
    throw new TypeError('Argument is not an array');
  }
  const newArr = [];
  nums.forEach((item) => {
    if (item % 2 === 0) {
      newArr.push('even');
    } else {
      newArr.push('odd');
    }
  });
  return newArr;
};
