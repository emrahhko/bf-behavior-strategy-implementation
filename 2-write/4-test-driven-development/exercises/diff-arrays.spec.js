import { diffArrays } from './diff-arrays.js';

describe(' Returns an array containing only the items that are not in both a and b.', () => {
  it(' Array containing only the items that are not in both a and b.', () => {
    expect(diffArrays([5, 2, 3], [4, 2, 3])).toEqual([5, 4]);
  })
  it('containing only the items that are not in both args', () => {
    expect(diffArrays([2, NaN], [3, 1])).toEqual([2, NaN, 3, 1]);
  })
    it('containing only the items that are not in both argss', () => {
    expect(diffArrays([2, 3, 4], [2, 3, 1])).toEqual([4, 1]);
  })
  it('both array containt the same items', () => {
    expect(diffArrays([2, 3, 4], [2, 3, 4])).toEqual([]);
  })
  it('both array are empty', () => {
    expect(diffArrays([], [])).toEqual([]);
  })
});

describe('different error message', () => {
  it('if both args are not arrays', () => {
    expect( () => diffArrays('hello', 3)).toThrow(TypeError);
  })
  it('if one args are not array', () => {
    expect( () => diffArrays(['a', 'b'], NaN)).toThrow(TypeError);
  })
})
