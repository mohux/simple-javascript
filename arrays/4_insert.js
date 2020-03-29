// * Adding a value to an array is easy,
// * we simply use array.push() function
// ? but what if we wanted to add a value in a certain index ? 
// ? or maybe after a certain condition is applied ?


// * lets add a value at the start of an array.

const numbers = [4,6,8,10];
// * unshift is the opposite of push, it pushes at the start
// ? what does shift do?!
numbers.unshift(2);



// * lets add at 3rd index 
// * splice is a function that is used to delete certain amount of values after the specified index,
// * with the ability to replace the deleted index with a new value
// * here we said, we wanted to delete 0 index (which means none) after index 2 (3rd value 0,1,2)
// * and insert value 14 in there
numbers.splice(2,0,14);


// * we could use findIndex of a certain value, and use splice to put a value there ;)
