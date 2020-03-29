
// * Destructuring is one of the most commonly used functionality in modern javascript

// * it means, we are "extracting" from this object

const user = { name: "Mohammad", id: "111" };


// * in the old ways, if we needed to take values from an object, we had to do something like this

// const name = user.name;
// const id = user.id;

// * imagine how hellish this can be with large objects.
// * now we can do this


// * its gonna extract name attribute, id attribute from user and put them into,
// * variables with the same naming

// * what can we do if "name" is used by other variable ?
const {name,id} = user;

// * we can do this 

// const {name:userName} = user;

// * it will extract name from user, and assign it to userName variable
// * we can even it give it default value in case this attribute was not found!
const {name:userName = ''} = user;


// * ok lets talk a little bit about spread operators

// * it works the same way as arrays, we can clone the object with it

const clone = {...user};

// * but thats not all, we can even spread the values of an object inside another object

// * for example, lets imagine we have an object called "data", and we want to spread it inside user

const data = {
    salary:1000,
    major:'SE'
}

// * in the old ways we had to loop through data using Object.keys and assign user[key] to the new value
// * not anymore
// * we could create a larger object by doing this

const userWithData = {...user,...data};

console.log(userWithData)