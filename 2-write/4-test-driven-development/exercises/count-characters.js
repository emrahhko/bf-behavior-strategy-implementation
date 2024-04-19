/**
 * Counts how many times each character appears in a string.
 *
 * @param {string} [text=''] - The string of characters to count.
 * @returns {number{}} An object of key/value pairs counting each character.
 *
 * @example
 *
 * countCharacters('hi'); // { h: 1, i: 1 }
 *
 * @example
 *
 * countCharacters('hiiii'); // { h: 1, i: 4 }
 *
 */
export const countCharacters = (text = '') => {
  const newObj = {};
  for (const char of text) {
    newObj[char] = (newObj[char] || 0) +1;
  }
  return newObj;
};
