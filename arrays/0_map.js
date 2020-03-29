// * array map function is so simple
// * it loops through an array, returns the value in every loop,
// * and returns a new array!
// * we could use it to create a manipulated array without affecting the original one

// * lets create an array that returns doubled values from an array

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(value => value * 2);

console.log(doubled);


// * there is a nice function called, includes
// * it returns true or false based on if this array includes this value

console.log(numbers.includes(2));