import frequencies from "./frequencies.js";
import boxes from "./boxes.js";

const solution1 = function (arr) {
  return arr.reduce((acc, current) => acc + current, 0);
};

function solution2(frequencies) {
  const twice = [0];
  let reach = 0;
  let isTwice = false;
  while (!isTwice) {
    for (let frequency of frequencies) {
      reach = frequency + twice.at(-1);
      if (twice.includes(reach)) {
        isTwice = true;
        return reach;
      } else {
        twice.push(reach);
      }
    }
  }
}
//console.log(boxes.length);
//const test = ["abcdef","bababc", "abbcde", "abcccd", "aabcdd","abcdee","ababab"];
function solution3(boxes){
  // Store the final dupplicates.
  let twice = 0;
  let third = 0;
  const total = [];
  for(let box of boxes){
    const result = new Set();
    const uniqueChars = new Set(box);
    for(let letter of uniqueChars){
      const regExp = new RegExp(letter, "g");
      const dupplicate = box.match(regExp).length;
      if(dupplicate === 2 || dupplicate === 3){
        result.add(dupplicate);
      }
      
    }
    total.push(...result);
  }
  for (const nb of total ){
    nb === 2 ? twice++ : nb === 3 ? third++ : null;
  }
  return twice * third;

}
// IA correction
function solution3ia(boxes) {
  let twiceCount = 0;
  let threeCount = 0;

  for (const box of boxes) {
    const counts = {};

    // Compter chaque lettre dans la boîte
    for (const letter of box) {
      counts[letter] = (counts[letter] || 0) + 1;
    }

    // Vérifier si la boîte contient une lettre apparaissant exactement 2 ou 3 fois
    const hasExactlyTwo = Object.values(counts).some(count => count === 2);
    const hasExactlyThree = Object.values(counts).some(count => count === 3);

    if (hasExactlyTwo) twiceCount++;
    if (hasExactlyThree) threeCount++;
  }

  return twiceCount * threeCount;
}
//console.log(solution3(boxes));

const test = ["abcde", "fghij", "klmno", "pqrst", "fguij", "axcye", "wvxyz"];

function solution4(boxes) {
  // Catch odd items.
  for (let i = 0; i < boxes.length; i++) {
    // Catch even items.
    for (let j = i + 1; j < boxes.length; j++) {
      const word1 = boxes[i];
      const word2 = boxes[j];

      // Ckeck item's same length.
      if (word1.length !== word2.length) continue;

      let diffCount = 0;
      let diffIndex = -1;

      // Compare characters.
      for (let k = 0; k < word1.length; k++) {
        if (word1[k] !== word2[k]) {
          diffCount++;
          diffIndex = k;
          if (diffCount > 1) break; // More than one diff.
        }
      }

      if (diffCount === 1) {
        const commonPart = word1.slice(0, diffIndex) + word1.slice(diffIndex + 1);
        console.log("Finded word :", word1, word2);
        console.log("Commun part :", commonPart);
        // return;
      }
    }
  }
}

function solution4_redo(boxes) {
  const lg = boxes.length;
  for (let i = 0; i < lg; i++) {
    for (let j = i + 1; j < lg; j++) {
      const word1 = boxes[i];
      const word2 = boxes[j];
      let diff = 0 ;
      let charDiff = -1;
      for (let k = 0; k < word1.length; k++) {
        if (word1[k] !== word2[k]) {
          diff++;
          charDiff = k;
          if (diff > 1) {
            break;
          }
        }
      }
      // console.log("diff",diff);
      if(diff === 1){
        console.log("Diff words", word1, word2);
      console.log(
        "Common part",
        word1.slice(0, charDiff) + word1.slice(charDiff + 1)
      );
      }
      
    }
  }
}

solution4(boxes);
solution4_redo(boxes);

// https://adventofcode.com/2018/day/3
