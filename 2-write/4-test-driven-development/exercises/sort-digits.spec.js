import { sortDigits } from './sort-digits.js';

describe(' Creates a new number by sorting the digits in another.', () => {
  it(' a new number by sorting the digits in another.', () => {
    expect(sortDigits(2321, true)).toEqual(1223);
  })
  it('new number by sorting the digits in another', () => {
    expect(sortDigits(2321, false)).toEqual(3221);
  })
  it('number sorted by digits', () => {
    expect(sortDigits(6789, false)).toEqual(9876);
  })
});
