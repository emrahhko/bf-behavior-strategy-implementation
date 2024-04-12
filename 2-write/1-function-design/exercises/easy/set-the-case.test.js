// #todo

'use strict';

/**
 * sets all the characters in a string to upper or lower case
 * @param {string} [text=''] - the text to casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the text in all lower or upper case
 */

// -------- your solutions --------
const solution1 = (text = '', lowerCase = true) => {
  if (lowerCase) {
    return text.toLowerCase();
  } else {
    return text.toUpperCase();
  }
};

for (const solution of [secretSolution, solution1]) {
  describe(solution.name + ': sets a text to lower or upper case', () => {
    describe("the function's default parameters", () => {
      it('second parameter defaults to true', () => {
        expect(solution('asdf')).toEqual('asdf');
      });
      it('first parameter defaults to an empty string', () => {
        expect(solution()).toEqual('');
      });
    });
    // write the tests indicated by the comments
    describe('when set to lower case', () => {
      // when the text is an empty string
      it('from empty to lower', () => {
        expect(solution('', true)).toEqual('');
      });
      // when the text is all upper case
      it('from upper to lower', () => {
        expect(solution('HELLO', true)).toEqual('hello');
      });
      // when the text is all lower case
      it('from lower to lower', () => {
        expect(solution('bateau', true)).toEqual('bateau');
      });
      // when the text is mixed upper and lower case
      it('from mixed to lower', () => {
        expect(solution('GoLaZo', true)).toEqual('golazo');
      });
      // when the text contains punctuation
      // when the text contains numbers
      it('from numerized to lower', () => {
        expect(solution('sa1234')).toEqual('sa1234');
      });
    });
    describe('when set to upper case', () => {
      // when the text is an empty string
      it('from empty to upper', () => {
        expect(solution('', false)).toEqual('');
      });
      // when the text is all upper case
      it('from upper to upper', () => {
        expect(solution('LOL', false)).toEqual('LOL');
      });
      // when the text is all lower case
      it('from lower to upper', () => {
        expect(solution('bridges', false)).toEqual('BRIDGES');
      });
      // when the text is mixed upper and lower case
      it('from mixed to upper', () => {
        expect(solution('DrAgOnS', false)).toEqual('DRAGONS');
      });
      // when the text contains punctuation
      // when the text contains numbers
      it('from numerized to upper', () => {
        expect(solution('d1568d', false)).toEqual('D1568D');
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; return c = b ? a.toLowerCase() : a.toUpperCase(), c }
