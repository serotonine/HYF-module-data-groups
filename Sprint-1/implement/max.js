function findMax(elements) {
  if( !Array.isArray(elements)){
    throw new Error("The argument must be an array.")
  }
  numList = elements.filter(el => typeof el === 'number');
  return Math.max(...numList);
}
console.log(findMax([33.55, "babar", -20.5, 0.25, "barnabé", 5350.78]));
module.exports = findMax;
