// we can create a method by creating prototype
// string, array , function ----> object ---->null 
// this is the hierachy

// lets create a custom method that shows the  true length of string

const name = "Aakash   "
const myArray = ['apple','ball', 'adadada']
Object.prototype.trueLength = function (){   //  we have set a method prototype to object
    console.log(` the length is ${this.trim().length}`)
}
name.trueLength()
console.log(name.length)

// we can set method to an string, array by
String.prototype.trueee = function (){
    console.log(`length is ${this.length}`)
}
name.trueee()

Array.prototype.lengthh = function () {
    console.log(`the length of array is ${this.length}`)
}
myArray.lengthh()

// we can implement inheritence byyy

const user ={
name : "User11",
address : "butwal",
subject : "mathss"
}
const manager = {
 id : 12,
 name :"manager1",
 depaartment : "advertisement"
}
const employee ={
name :"employee1",
address : "UK"
}
Object.setPrototypeOf(manager, employee)
Object.setPrototypeOf(employee, user)
console.log(manager.address)
console.log(manager.subject);

