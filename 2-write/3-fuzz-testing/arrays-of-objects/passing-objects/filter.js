/**
 * Filters an array of objects based on the 'pass' property.
 *
 * @param {Array} arr - The array of objects to be filtered.
 * @returns {Array} - A new array containing only the objects that have 'pass' property set to true.
 */

const solution1 = (arr = []) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('argument is not an array');
  }
  if (!arr.every(arr => Object(arr) === arr)) {
    throw new TypeError('is not an array of object');
  }
  return arr.filter(item => item.pass === true);
}





export const solution = (arr) => {
    return arr.filter((obj) => obj.pass === true);
};
