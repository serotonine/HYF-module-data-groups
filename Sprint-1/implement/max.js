function findMax(elements) {
  if( !Array.isArray(elements)){
    throw new Error("The argument must be an array.")
  }
  const numList = elements.filter(el => typeof el === 'number');
  return Math.max(...numList);
}
module.exports = findMax;
