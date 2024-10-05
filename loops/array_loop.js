// // for of loop is generally used for looping elements of array and object
// // it returns elements of array or object
// const myArray=[1,2,3,4,5,6]
// for (const element of myArray) {
//     console.log(element);
// // }

// const arrObj=[
//     {
// name: "apple",
// address :"ball"
// },
// {
//     name1: "Monkey",
//     address1 : "donkey"
// }
// ,2,34
// ]
// for (const data of arrObj) {
//     console.log(data);
//     // console.log(data.name);
// }


// // // for in loop is mostly used for objects
// // // it provides both key and value

// const array2 =[1,23,4,5,6,7]
// for (const key in array2) {
//     console.log(array2);
// }

// const myObject = {
//     name : "aakshh",
//     addr : "butwal"
// }
// for (const key in myObject) {
//     console.log(myObject[key]);
    
// }

// // maps is similar to array we can create maps by
// // it only contain unique values 
// const mapss = new Map()
// mapss.set('coin','nepali')
// mapss.set('coin2','nepali2')
// mapss.set('coin3','nepali3')
// mapss.set('coin4','nepali4')
// console.log(mapss);


// for each loop is used for looping in arrays

const  students = ["ram","hari","sita"]
students.forEach((data,index,arr)=>{  // it can have 3 parameters
    console.log(data,arr,index);
} )
