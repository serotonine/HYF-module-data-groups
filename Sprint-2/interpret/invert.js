// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
/* { key: 1 } */

// b) What is the current return value when invert is called with { a: 1, b: 2 }
/* { key: 2 } */

// c) What is the target return value when invert is called with {a : 1, b: 2}
/* {"1":"a", "2":"b"} */

// c) What does Object.entries return? Why is it needed in this program?
/*
 * Convert an Object to an array with key value
 * E.g. Object.entries({x : 10, y : 20}) => [["x", 10], ["y", 20] ]
 */

// d) Explain why the current return value is different from the target output
/*
 * You must use obj[key] notation in order to create a new object entry
 * You must use the value as key and the key as value.
 */

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
console.log(invert({ a: 1, b: 2 }));
