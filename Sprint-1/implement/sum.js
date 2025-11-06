/*
* you will need to implement a function that sums the numerical elements of an array
* E.g. sum([10, 20, 30]), target output: 60
* E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

function sum(elements) {
  return elements
    .filter((el) => typeof el === "number")
    .reduce((acc, current) => acc + current, 0);
}

module.exports = sum;
