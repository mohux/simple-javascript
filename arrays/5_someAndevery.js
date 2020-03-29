// * Arrays in javascript have 2 nice functions
// * Array.some
// * array.every

// * some means, at least one of the indexes matches a certain condition
// * every means, all indexes must apply the condition

// * assuming we have an array of numbers
// * are all the numbers even  ?

const numbers = [1,2,3,4,5];
const allAreEven = numbers.every(number => number & 2 === 0);
const atLeastOneIsEven = numbers.some(number => number & 2 === 0);

// * we could use these functions with array of objects as well,