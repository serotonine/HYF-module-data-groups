const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'
*/

// Acceptance criteria:

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise
it(`Given an object with properties, should return true if the object contains the property`, () => {
    const obj = {
      "Babar":"on the beach",
      "Martine":"goes skiing",
      "Tangerine":"under attack",
    }
    expect(contains(obj, "Babar")).toEqual(true)
  });

// Given an empty object
// When passed to contains
// Then it should return false
 it(`Given an empty object, then it should return false`, () => {
    const obj = {}
    expect(contains(obj, "Sidonie")).toEqual(false)
  });
 

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
  it(`Given an object with properties, when passed to contains with a non-existent property name, then it should return false`, () => {
    const obj = {
      "Babar":"on the beach",
      "Martine":"goes skiing",
      "Tangerine":"under attack",
    }
    
    expect(contains(obj, "Sidonie")).toEqual(false)
  });

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
  it("given a non array, it throws an error", () => {
    const input = ["babar","on the beach"];
    expect(() => contains(input)).toThrowError();
  });


