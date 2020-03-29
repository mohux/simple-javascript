// * Assuming we have an array with multiple attributes,
// * either they are normal indexes, or objects.
// * We sometimes need to find a specific value in there and extract it
// * there are many ways to do such a thing, but there is always in easy way!

// * first of all, assuming we have a simple array
// * let's find the index of Ahmad
const simple_array = ["Mohammad", "Khaled", "Ahmad", "Majd"];

const idxOfAhmad = simple_array.findIndex(
  name => name.toLowerCase() === "ahmad"
);
// * Assuming you don't like working with arrow functions
// * the above example is equilavnt to
// * people usually like arrow functions because they are simpler to write.
const idxOfAhmad2 = simple_array.findIndex(function(name) {
  return name.toLowerCase() === "ahmad";
});

// * ok this was easy, but now let's go to a little bit harder one
// * assuming we have ID with 123 value, lets find a user with this id and extract his name
// * in this case we need an array of users

const users = [
  { name: "Mohammad", id: "111" },
  { name: "Khaled", id: "113" },
  { name: "Ahmad", id: "115" },
  { name: "Majd", id: "119" },
  { name: "Wael", id: "123" }
];

const found_user = users.find(user => user.id === "123");

// * again, even though sometimes we think its hard, its as simple as we can guess.
// * lets go to a more challenging one.

// * assume we have 2 arrays, array of fields, and array of values,
// * lets set a value attribute to each field by taking it from the array of values
// * if there is no matching value, we should make it empty,
// * assuming of course we have field_id inside values array

const fields = [
  { id: 1, title: "Email" },
  { id: 2, title: "Full Name" },
  { id: 3, title: "Major" }
];
const values = [
  { value: "email@email.com", field_id: 1 },
  { value: "My Full Name", field_id: 2 }
];

fields.forEach(field => {
  const result = values.find(val => val.field_id === field.id);
  field.value = result ? result.value : "";
});
// expected results
// [
//   { id: 1, title: 'Email', value: 'email@email.com' }, 
//   { id: 2, title: 'Full Name', value: 'My Full Name' },
//   { id: 3, title: 'Major', value: '' }
// ]