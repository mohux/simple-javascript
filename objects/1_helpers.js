// * dealing with objects in javascript is a thing you cant avoid

// * lets talk about some helper functions inside object first as a warmup
// * considering we have a JSON object or a javascript object as follows

const user = { name: "Mohammad", id: "111" };

// * returns an array of values with all the keys inside this array
console.log(Object.keys(user));
// * returns an array of values with all the values inside this array
console.log(Object.values(user));

// * we could loop through keys when we need maybe?

// * Object.assign clones the object and overrides the attributes u specify in the 3rd parameter
const clone = Object.assign({}, user, {
  id: 222
});
