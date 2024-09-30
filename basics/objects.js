//we can create an object using curly braces and in key value pairs
const reg_no = Symbol("reg") // we can use symbol for unique values
const myObj ={
    name:"aakash",
    address : "butwal",
    [reg_no]: 1234,
    email :"aakash@gmail.com" 
}

// we can access properties of object by 2 ways
console.log(myObj[reg_no]);
console.log(myObj.name);
console.log(myObj["name"]);

// we can change values inside a object by =
myObj.name ="alex"
console.log(myObj["name"]);

//we can freeze the object so that no change can be done on it 
// Object.freeze(myObj)
myObj.name ="alexis"
console.log(myObj["name"]);

//we can also add function as property in a object
myObj.property = function(){
    console.log(`This is a function inside a object ${this.name}`); 
}
console.log(myObj.property());
