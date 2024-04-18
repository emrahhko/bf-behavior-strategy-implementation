/**
 * Reverses and concatenates an array of strings.
 *
 * @param {string[]} arr - The array of strings to be reversed and concatenated.
 * @returns {string} - The result of reversing and concatenating the array elements.
 */

const solution1 = (strings = []) => {
  if (!Array.isArray(strings)) {
    throw new TypeError('arguments is not an array');
  }
  const isAllStrings = strings.some((item) => typeof item !== 'string');
  if (isAllStrings) {
    throw new TypeError('arr do not contain onyl string');
  }
  let result = '';
  strings.forEach((item) => {
    result = String(item) + result;
  });
  return result;
};
