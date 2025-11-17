/*
  Count the number of times a word appears in a given string.

  Write a function called countWords that
    - takes a string as an argument
    - returns an object where
          - the keys are the words from the string and
          - the values are the number of times the word appears in the string

  Example
  If we call countWords like this:

  countWords("you and me and you") then the target output is { you: 2, and: 2, me: 1 }

  To complete this exercise you should understand
    - Strings and string manipulation
    - Loops
    - Comparison inside if statements
    - Setting values on an object
    */
function countWords(str) {
  if (typeof str !== "string") {
    throw new Error("You should pass a string.");
  }
  // 1. Remove all of the punctuation (e.g. ".", ",", "!", "?") to tidy up the results.
  const regExp = /[!\.,?]/g;
  const cleanStr = str.replace(regExp, "");
  // 2. Ignore the case of the words to find more unique words.
  const split = cleanStr.toLowerCase().split(/\s+/);
  // Count the number of times a word appears in a given string.
  const count = split.reduce((acc, current) => {
    current in acc ? acc[current]++ : (acc[current] = 1);
    return acc;
  }, {});
  // 3. Order the results to find out which word is the most common in the input.
  return Object.entries(count)
    .sort((a, b) => a[1] - b[1])
    .reduce((acc, curr) => {
      acc[curr.at(0)] = curr.at(1);
      return acc;
    }, {});
}

console.log(
  countWords(
    "The sciences, each straining in its own direction, have hitherto harmed us little; but some day the piecing together of dissociated knowledge will open up such terrifying vistas of reality, and of our frightful position therein, that we shall either go mad from the revelation or flee from the deadly light into the peace and safety of a new dark age."
  )
);
