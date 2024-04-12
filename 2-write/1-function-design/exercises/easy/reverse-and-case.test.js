// #todo

'use strict';

/**
 * reverses a string and sets all the characters to upper or lower case
 * @param {string} [text=''] - the text to reverse and casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the reversed text in all lower or upper case
 */

// -------- your solutions --------

// ------ first try function that work but the confirm() F*cked up the test. ----------------

// const solution1 = (text = '', lowerCase = true) => { 
//   let result = '';
//   let lowerOrUpper = confirm('want it on lower case');
//   lowerCase = lowerOrUpper;

//   for (let i = 0; i < text.length; i++) {
//     result = text[i] + result;
//   }

//   if (lowerOrUpper === false) {
//     return result.toUpperCase();
//   } else {
//     return result.toLowerCase();
//   }
// };

const solution1 = (text = '', lowerCase = true) => {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    result = text[i] + result;
  }
  if (lowerCase) {
    return result.toLowerCase();
  } else {
    return result.toUpperCase();
  }
};

// ------ first try function that work but the confirm() F*cked up the test. ----------------

// const solution2 = (text = '', lowerCase = true) => {
//   let lowerOrUpper = confirm('want it on lower case');
//   lowerCase = lowerOrUpper;

//   let result = text.split('').reverse().join('');

//   if (lowerCase === false) {
//     return result.toUpperCase();
//   } else {
//     return result.toLowerCase();
//   }
// };

const solution2 = (text = '', lowerCase = true) => {


  let result = text.split('').reverse().join('');

  if (lowerCase) {
    return result.toLowerCase();
  } else {
    return result.toUpperCase();
  }


};

const solutions = [solution1, solution2, secretSolution];

for (const solution of solutions) {
  describe(
    solution.name + ': reverses a string then sets to lower or upper case',
    () => {
      describe("the function's default parameters", () => {
        it('second parameter defaults to true', () => {
          expect(solution('asdf')).toEqual('fdsa');
        });
        it('first parameter defaults to an empty string', () => {
          expect(solution()).toEqual('');
        });
      });
      // write the tests indicated by the comments
      describe('when set to lower case', () => {
        // when the text is an empty string
        it('result to lower case', () => {
          expect(solution('abcde', true)).toEqual('edcba');
        });

        it('result to lower case 2', () => {
          expect(solution('golazo', true)).toEqual('ozalog');
        });
        // when the text is all upper case
        it('from upper to lower', () => {
          expect(solution('GOLAZO', true)).toEqual('ozalog');
        });
        // when the text is all lower case
        it('from lower to lower', () => {
          expect(solution('cerise', true)).toEqual('esirec');
        });
        // when the text is mixed upper and lower case
        it('from mixed to lower', () => {
          expect(solution('COol', true)).toEqual('looc');
        });
        // when the text contains punctuation
        it('from ponctued to lower', () => {
          expect(solution('Hey toi?! Ca va?', true)).toEqual(
            '?av ac !?iot yeh',
          );
        });
        // when the text contains numbers
        it('from numbered to lower', () => {
          expect(solution('Trabzon is 61 Adana is 01', true)).toEqual(
            '10 si anada 16 si nozbart',
          );
        });
      });
      describe('when set to upper case', () => {
        // when the text is an empty string
        it("from '' to '' ", () => {
          expect(solution('', false)).toEqual('');
        });
        // when the text is all upper case
        it('from upper to upper', () => {
          expect(solution('HEELLO', false)).toEqual('OLLEEH');
        });
        // when the text is all lower case
        it('from lower to lower', () => {
          expect(solution('TEST', false)).toEqual('TSET');
        });
        // when the text is mixed upper and lower case
        it('from mixed to upper', () => {
          expect(solution('GoLaZo', false)).toEqual('OZALOG');
        });
        // when the text contains punctuation
        it('from ponctued to upper', () => {
          expect(solution('Hey toi?! Ca va?', false)).toEqual(
            '?AV AC !?IOT YEH',
          );
        });
        // when the text contains numbers
        it('from numbered to upper', () => {
          expect(solution('Trabzon is 61 Adana is 01', false)).toEqual(
            '10 SI ANADA 16 SI NOZBART',
          );
        });
      });
    },
  );
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; for (let d = a.length - 1; 0 <= d; d--)c += a[d]; let d = ""; return d = b ? c.toLowerCase() : c.toUpperCase(), d }
