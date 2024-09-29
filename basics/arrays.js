// ways for creating array in js
const array1 = ['apple','ball','cat'] // araray with strings
const animal = new Array(1,2,23,4,5,6,7) // array with constructor
const random_array = [1,2,"apple",true] // array can have multiple data types
// console.log(array1);
// console.log(animal);
// console.log(random_array);

// we can add an element into last index of an array by using push method
// animal.push(1234);
// console.log(animal);

//we can remove the last element from array using pop method
// animal.pop()
// console.log(animal);

// we can add an element into first index using the unshift method
// benefecial when element is on high priority
// array1.unshift("zebra")
// console.log(array1);

// we can remove first element from array using shift
// array1.shift()
// console.log(array1);

//we can add an array into another array by following methods
// console.log(array1.concat(animal))
// const new_array= array1.push(...animal)
// console.log(new_array);
// console.log(array1);

// console.log(animal);
// console.log(animal.slice(1,3))// it shows elements but excludes index
// console.log(animal.splice(1,3));// it shows elements and includes the index

// // we have methods thet return boolean from array
// console.log(array1.includes("hello"));
// console.log(array1.join(animal)); // it joins arrays and returns a string
// console.log(array1.length) //it returns the length of an array


