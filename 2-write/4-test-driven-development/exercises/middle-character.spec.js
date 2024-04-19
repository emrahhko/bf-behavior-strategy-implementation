import { middleCharacter } from './middle-character.js';

describe(' Returns the middle character from a string.', () => {
  it(' the middle character from an odd length string.', () => {
    expect(middleCharacter('Emrah')).toEqual('r');
  });
  it(' with a odd long string', () => {
    expect(middleCharacter('Trabzonspor')).toEqual('o');
  });
  it(' with short odd lenght of string', () => {
    expect(middleCharacter('pul')).toEqual('u');
  });
  it('with even length of string', () => {
    expect(middleCharacter('pull')).toEqual('ul');
  });
  it('another even length of string', () => {
    expect(middleCharacter('Beauty')).toEqual('au');
  });
  it('last one with even to be sure', () => {
    expect(middleCharacter('Independence')).toEqual('en');
  });
  it('with an empty string', () => {
    expect(middleCharacter('')).toEqual('');
  });
});

describe('different error type', () => {
  it('not a string as an argument', () => {
    expect(() => middleCharacter(123)).toThrow(TypeError);
  });
});
