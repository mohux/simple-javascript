// * array sorts is a function built in javascript.

// * it loops through an array and sorts them according to the returned value
// * is the returned value is negative or positive, not if true or false
// * it works little bit differently than other array functions

// * lets sort an array of numbers asecdingly and descendly then sort users according to ages

const numbers = [5, 1, 15, 7, 3, 10];

// * previous number or the first parameter is the last index that returned positive

const sorted_numbers_desc = numbers.sort(
  (previous_number, current_number) => current_number - previous_number
);
const sorted_numbers_asec = numbers.sort(
  (previous_number, current_number) => previous_number - current_number
);
console.log(sorted_numbers_asec);

const users = [
  { name: "ahmad", age: 15 },
  { name: "saad", age: 25 },
  { name: "nour", age: 17 }
];

const sorted_users = users.sort(
  (prev_user, current_user) => prev_user.age - current_user.age
);

console.log(sorted_users);
