// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test,
// and try to think of as many other edge cases as possible - write tests and fix those too.

const { parseQueryString, parseQueryString2 }  = require("./querystring.js")

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    "equation": "x=y+1",
  });
});

test('parses querystring2 values containing ="equation=x=y=x+1"', () => {
  expect(parseQueryString2("equation=x=y=x+1")).toEqual({
    "equation": "x",
    "x": "y",
    "y":"x+1"
  });
});

test('parses querystring2 values containing ="equation"', () => {
  expect(parseQueryString2("equation")).toEqual({});
});

test('parses querystring2 values not string', () => {
  expect(parseQueryString2(50)).toEqual(false);
});
