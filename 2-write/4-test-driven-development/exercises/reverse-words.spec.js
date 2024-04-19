import { reverseWords } from './reverse-words.js';

describe('Reverses each word in a string', () => {
  it('reverse a string', () => {
    expect(reverseWords('Hello')).toEqual('olleH');
  })
  it('reverse a composed string', () => {
    expect(reverseWords('Hello World')).toEqual('dlroW olleH')
  })
  it('reverse the word reverse', () => {
    expect(reverseWords('reverse')).toEqual('esrever');
  })
});

describe('different error type', () => {
  it('argument is not a string', () => {
    expect( () => reverseWords(123)).toThrow(TypeError)
  })
})
