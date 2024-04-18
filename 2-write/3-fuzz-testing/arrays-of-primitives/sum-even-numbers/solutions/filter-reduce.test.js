import { filterReduce } from "./filter-reduce.js";

describe(filterReduce.name + 'sums all even numbers in an array', () => {
    it('sums all even numbers', () => {
      expect(filterReduce([1, 2, 3, 4, 5, 6])).toEqual(12);
    })
    it('with no number type in the array', () => {
      expect( () => filterReduce(['1', '2', '3', '4', '5', '6'])).toThrow(TypeError);
    })
    it('with mixed type', () => {
      expect( () => filterReduce(['1', '2', '3', '4', '5', '6', 4, 6])).toEqual(10);
    })
  })
  