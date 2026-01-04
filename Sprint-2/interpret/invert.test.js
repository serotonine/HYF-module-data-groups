const invert = require("./invert.js");

/*
 * Given an object
 * When invert is passed this object
 * Then it should swap the keys and values in the object.
 */
describe("invert", () => {
  [
    { input: { x: 10, y: 20 }, expected: { 10: "x", 20: "y" } },
    { input: { a: 1, b: 2 }, expected: { 1: "a", 2: "b" } },
    {
      input: { babar: "the elephant", arr: [1, 2, 3, 4], false: null },
      expected: { "the elephant": "babar", "1,2,3,4": "arr", null: "false" },
    },
  ].forEach(({ input, expected }) =>
    it(`Given an object [${input}], it should return an object with keys and values swapped: [${expected}].`, () =>
      expect(invert(input)).toEqual(expected))
  );
});
