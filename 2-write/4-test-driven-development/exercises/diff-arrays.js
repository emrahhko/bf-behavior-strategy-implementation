/**
 * Returns an array containing only the items that are not in both a and b.
 *  This is a pure function with no side-effects.
 *
 * @param {number[]} [a=[]] - One of the two arrays.
 * @param {number[]} [b=[]] - The other array.
 * @returns {number[]} A new array with items not in both a and b.
 *
 * @example
 *
 * diffArrays([2], [1, 3]); // [3]
 *
 * @example
 *
 * diffArrays([2, NaN], [3, 1]); // [NaN, 3]
 *
 * @example
 *
 * diffArrays([2, 1], [3, 2]); // []
 * @example
 *
 * diffArrays([1, 2, 3], [4, 5]); // [1, 2, 3, 4, 5]
 */
export const diffArrays = (a = [], b = []) => {
  if (!Array.isArray(a) && !Array.isArray(b)) {
    throw new TypeError('arguments are not arrays');
  }
  const diffA = a.filter(item => !b.includes(item));
  const diffB = b.filter(item => !a.includes(item));
  return [...diffA, ...diffB];
};
