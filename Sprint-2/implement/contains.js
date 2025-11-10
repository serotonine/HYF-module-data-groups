/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'
*/

function contains(obj, prop) {
  console.log(Object.prototype.toString(obj));
  if(Object.prototype.toString(obj) !== "[object Object]" || Array.isArray(obj)){
    throw new Error("Your param is not an Object.")
  }

  return prop in obj; 
}
// console.log(contains(["babar","on the beach"], "Aglae"));

module.exports = contains;
