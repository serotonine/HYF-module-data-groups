/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs

describe("sum", () => {
  // Given an empty array
  // When passed to the sum function
  // Then it should return 0
  it("given an empty array, returns 0", () => {
    expect(sum([])).toEqual(0);
  });
  // Given an array with just one number
  // When passed to the sum function
  // Then it should return that number
  it("an array with just one number, returns that number", () => {
    expect(sum([33])).toEqual(33);
  });
  // Given an array containing negative numbers
  // When passed to the sum function
  // Then it should still return the correct total sum
  [
    { input: [-1, -2, -3], expected: -6 },
    { input: [21.5, -55.25, 3.45, 4.25, -5], expected: -31.05 },
    { input: [1.333, -2, 45, 56, 99], expected: 199.333 },
  ].forEach(({ input, expected }) =>
    it(`return the correct total sum [${input}]`, () =>
      expect(sum(input)).toEqual(expected))
  );

  // Given an array containing non-number values
  // When passed to the sum function
  // Then it should ignore the non-numerical values and return the sum of the numerical elements
  [
    { input: [1, 2, "3", null, undefined, 4], expected: 7 },
    { input: ["apple", 1, 2, 3, "banana", 4], expected: 10 },
    { input: [1, "2", 3, "4", 5], expected: 9 },
    { input: [1, "apple", 2, null, 3, undefined, 4], expected: 10 },
    { input: [3, "apple", 1, null, 2, undefined, 4], expected: 10 },
    { input: ["banana", 5, 3, "apple", 1, 4, 2], expected: 15 },
  ].forEach(({ input, expected }) =>
    it(`filters out non-numeric values and calculates the median for [${input}]`, () =>
      expect(sum(input)).toEqual(expected))
  );
  // Given an array with only non-number values
  // When passed to the sum function
  // Then it should return the least surprising value given how it behaves for all other inputs
  it("given an array with only non-number values, returns 0", () => {
    expect(sum(["Babar", "Celeste"])).toEqual(0);
  });
});
