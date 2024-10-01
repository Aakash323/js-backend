//we can create an object using curly braces and in key value pairs
const reg_no = Symbol("reg") // we can use symbol for unique values
const myObj ={
    name:"aakash",
    address : "butwal",
    [reg_no]: 1234,
    email :"aakash@gmail.com" 
}

// we can access properties of object by 2 ways
// console.log(myObj[reg_no]);
// console.log(myObj.name);
// console.log(myObj["name"]);

// we can change values inside a object by =
myObj.name ="alex"
// console.log(myObj["name"]);

//we can freeze the object so that no change can be done on it 
// Object.freeze(myObj)
myObj.name ="alexis"
// console.log(myObj["name"]);

//we can also add function as property in a object
myObj.property = function(){
    // console.log(`This is a function inside a object ${this.name}`); 
}
// console.log(myObj.property());

//we can create object as a constructor as well

const man = new Object()
const women = {}

man.name1 = "Hari"
man.address1 = "kathmandu"
women.name = "sita"
women.address = "pokhara"


// we can create an object insdie a object
const person3 ={
    name:{
        fullname:{
            first_name :"ronaldo",
            last_name: "messi"
        }
    }
}
// console.log(person3?.name?.fullname);


// we can combine objects and create a new object
const person = {...man,...women}  // combining objects using seperator
// const person = Object.assign({},man,women)  // combining objects using object.assign
// const person = { man, women}  // combining objects like arrays directly
const person1 = {}
console.log(person);


// we have different methods for objects like

console.log(Object.entries(person));
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.hasOwnProperty("namewd"));

