const myObj = {
    name : "Aakash",
    address : "nepal",
    id : 12
}

// generally we access properties of object by
console.log(myObj.name)

//we can destructure the object by
const {name : nn}= myObj
console.log(nn);
