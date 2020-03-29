// * assuming we want to manipulate certain index of an array.
// * if we were counting on this array as react state, socket, doms
// * to watch their changes, its a bad practice to directly manipulate it.

// * its better to clone them, manipulate the values, then override the old values

// * lets find the index where user is ahmad, manipulate his name inside the array

let users = [
  { name: "Mohammad", id: "111" },
  { name: "Khaled", id: "113" },
  { name: "Ahmad", id: "115" },
  { name: "Majd", id: "119" },
  { name: "Wael", id: "123" }
];

// * this is called, spread operators, it spreads the array of users inside a new array
// * creating a new array and not a reference
const clone = [...users];
const idx = clone.findIndex(user => user.name === 'Ahmad');
clone[idx].name = 'Ahmad 2';

users = clone;

// ! keep in note, if the array is not in a place where manipulating directly is bad
// ! it will be ok to manipulate it with cloning.