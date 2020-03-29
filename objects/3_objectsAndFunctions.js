// * everything mentioned previously can be applied to functions

// * assuming we have a function that accepts some data params

function logName({ name,...rest }) {
    // * since we spread operated "rest"
    // * it will contain all the attributes except name which was extracted before
    // * it means the remaining attributes, age and salary 
  console.log(name,rest);
}

const data = { name: "bla", age: 15, salary:1000 };

logName(data);


// * we could use spread operators if we want to as well.