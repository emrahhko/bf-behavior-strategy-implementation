import { countCharacters } from './count-characters.js';

describe(
  countCharacters.name +
    ' Counts how many times each character appears in a string',
  () => {
    it('number of times each characters appears in a string', () => {
      expect(countCharacters('Emrah')).toEqual({
        E: 1,
        m: 1,
        r: 1,
        a: 1,
        h: 1,
      });
    });
        it('How many times each character appears in a string', () => {
      expect(countCharacters('hiiii')).toEqual({ h: 1, i: 4 });
    });
    it('with numbery string', () => {
      expect(countCharacters('61')).toEqual({ 6: 1, 1: 1 });
    });
  },
);

describe(countCharacters.name + ' different error type', () =>{
  it('with a non string argument', () => {
    expect(() => countCharacters(61)).toThrow(TypeError);
  })
})