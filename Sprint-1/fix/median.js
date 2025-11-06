// Fix this implementation
/*
 * The median of an array of numbers is the middle value when all the numbers are sorted in order.
 * Sort the numbers from smallest to largest.
 * Then:
 * If there’s an odd number of elements → the median is the middle number.
 * If there’s an even number of elements → the median is the average of the two middle numbers.
 */

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // Check if list is an array.
  if (!Array.isArray(list)) {
    return null;
  }
  // Keep only numbers then sort ascending the list.
  const numList = list
    .filter((item) => typeof item === "number")
    .sort((a, b) => a - b);
  const lg = numList.length;
  // Check if list.
  if (lg === 0) {
    return null;
  }
  const middleIndex = Math.floor(lg / 2);
  // If lg is odd.
  if (lg % 2 !== 0) {
    const [median] = numList.splice(Math.floor(lg / 2), 1);
    return median;
  }
  // If lg is even.
  else {
    const middleIndex = numList
      .splice(lg / 2 - 1, 2)
      .reduce((acc, current) => acc + current, 0);
    return middleIndex / 2;
  }
}

module.exports = calculateMedian;
