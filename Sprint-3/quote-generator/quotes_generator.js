import { quotes } from "./quotes.js";

window.addEventListener("load", () => {
  const trigger = document.getElementById("new-quote");
  const quote = document.getElementById("quote");
  const author = document.getElementById("author");
  displayQuote();
  trigger.addEventListener("click", () => {
    displayQuote();
  });
});

/* async  */
function displayQuote() {
  const currentQuote = pickFromArray(quotes);
  //await writeText(currentQuote.quote, quote);
  quote.innerHTML = currentQuote.quote;
  author.innerHTML = currentQuote.author;
}

function writeText(text, el) {
  const lg = text.length;
  let count = 0;
  let current = text.charAt(count);
  el.innerHTML = current;
  const w = setInterval(() => {
    if (count < lg) {
      count++;
      current += text.charAt(count);
      el.innerHTML = current;
    } else {
      clearInterval(w);
    }
  }, 25);
}

// DO NOT EDIT BELOW HERE

// pickFromArray is a function which will return one item, at
// random, from the given array.
//
// Parameters
// ----------
// choices: an array of items to pick from.
//
// Returns
// -------
// One item at random from the given array.
//
// Examples of use
// ---------------
// pickFromArray(['a','b','c','d'])     // maybe returns 'c'

// You don't need to change this function
function pickFromArray(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

