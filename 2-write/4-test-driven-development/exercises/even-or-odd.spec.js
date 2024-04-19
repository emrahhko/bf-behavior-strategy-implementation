import { evenOrOdd } from './even-or-odd.js';

describe('Determines if each number in an array is even or odd.', () => {
  it('if each number in array is even or odd', () => {
    expect(evenOrOdd([1, 2])).toEqual(['odd', 'even']);
  });
  it('lots of numbers in an array', () => {
    expect(evenOrOdd([1, 2, 3, 4, 5, 61, 99, 100])).toEqual([
      'odd',
      'even',
      'odd',
      'even',
      'odd',
      'odd',
      'odd',
      'even',
    ]);
  });
  it('with negativ numbers in an array', () => {
    expect(evenOrOdd([-1, -2, -3])).toEqual(['odd', 'even', 'odd']);
  });
  it('with mixed negativ and positiv numbers', () => {
    expect(evenOrOdd([1, -2, 3, -4])).toEqual(['odd', 'even', 'odd', 'even']);
  })
});

describe('should not modify original array', () => {
  it('return a new array', () => {
    const argument = [1, 2, 3];
    const returned = evenOrOdd(argument);
    expect(argument !== returned).toEqual(true);
  })
})

describe('different type of error', () => {
  it('argument is not an array', () => {
    expect( () => evenOrOdd('hello')).toThrow(TypeError);
  })
})