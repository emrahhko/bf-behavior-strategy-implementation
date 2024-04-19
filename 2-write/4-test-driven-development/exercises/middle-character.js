/**
 * Returns the middle character from a string.
 *  It returns the middle 2 characters if the string has an even length.
 *
 * @param {string} [text=''] - Find the middle character(s) of this string.
 * @returns {string} The middle character(s) in the text.
 */
export const middleCharacter = (text = '') => {
  if (typeof text !== 'string') {
    throw new TypeError('the arguments is not a  string');
  }
  const leng = text.length;
  if (text.length % 2 === 1) {
    return text.charAt(leng/2)
  } else {
    return text.substring((leng/2)-1, (leng/2)+1);
  }
};
