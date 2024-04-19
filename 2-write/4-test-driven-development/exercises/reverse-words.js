/**
 * Reverses each word in a string.
 *
 * @param {string} [text=''] - The string of words to reverse.
 * @returns {string} The text, with each word reversed.
 *
 * @example
 *
 * reverseWords('hello'); // 'olleh'
 *
 * @example
 *
 * reverseWords('hello world!'); // 'olleh dlrow!'
 */
export const reverseWords = (text = '') => {
  if (typeof text !== 'string') {
    throw new TypeError('argument is not a string');
  }
  return text.split('').reverse().join('');
}
