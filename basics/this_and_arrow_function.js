 function sum(a,b){
 return(a + b)
}
console.log(sum(5,5))


// we can also use arrow functions as
// const abc = (name)=>{
//        return name
// }
// console.log(abc("aakash"))

// // we can also return the name directly by
// const abc = (name)=>(name) 

// console.log(abc("aakash"))

// this keyword is used to refer to current object
const employee ={
    name: "sam",
    address :"poland",
    age : 15,
    message : function welcome(){
        console.log(`Welcome, ${this.name}`);
        
    }
}
employee.message()