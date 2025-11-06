const dedupe = require("./dedupe.js");
/*
Dedupe Array

📖 Dedupe means **deduplicate**

In this kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) target output: ['a','b','c']
E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) target output: [5, 1, 2, 3, 8]
E.g. dedupe([1, 2, 1]) target output: [1, 2]
*/

// Acceptance Criteria:

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array
// test.todo("given an empty array, it returns an empty array");
it("given an empty array, it returns an empty array", () => {
    const list = [];
    dedupe(list);
    expect(list).toEqual([]);
  });

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
// test.todo("given an array with no duplicates, it returns a copy of the original array");
it("given an array with no duplicates, it returns a copy of the original array", () => {
    const list = [1,2,3,4,5,6,"robert"];
    dedupe(list);
    expect(list).toEqual([1,2,3,4,5,6,"robert"]);
  });

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element
// test.todo("given an array with strings or numbers, it returns an array with duplicate values removed");
/* it("given an array with strings or numbers, it returns an array with duplicate values removed", () => {
    const list = ['a','a','a','b','b','c'];
    dedupe(list);
    expect(list).toEqual(['a','b','c']);
  }); */
[
    { input: ['a','a','a','b','b','c'], expected: ['a','b','c'] },
    { input: [5, 1, 1, 2, 3, 2, 5, 8], expected: [5, 1, 2, 3, 8] },
    { input: [1, 2, 1], expected: [1, 2] },
    { input: ["banana", "apple", "kiwi", "kiwi", "banana"], expected: ["banana", "apple", "kiwi"] },
    { input: [undefined, "apple", null, null, 2, undefined, 4], expected: [undefined, "apple", null, 2, 4] },
  ].forEach(({ input, expected }) =>
    it(`given an array with strings or numbers, it returns an array with duplicate values removed [${input}]`, () => expect(dedupe(input)).toEqual(expected))
  );
