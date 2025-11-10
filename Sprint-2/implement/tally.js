/**
 * tally array
 *
 * In this task, you'll need to implement a function called tally
 * that will take a list of items and count the frequency of each item
 * in an array
 *
 * For example:
 *
 * tally(['a']), target output: { a: 1 }
 * tally(['a', 'a', 'a']), target output: { a: 3 }
 * tally(['a', 'a', 'b', 'c']), target output: { a : 2, b: 1, c: 1 }
 */

function tally(arr) {
  if((!Array.isArray(arr))){
    throw new Error ("You should pass an array.");
  }
  return arr.reduce((acc, current) => {
    current in acc ? acc[current]++ : acc[current] = 1;
    return acc;
   }, {})
}

module.exports = tally;
