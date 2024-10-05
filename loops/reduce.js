// reduce is used generally to set a initial value and after that operations can be performed on that
// used mostly in shopping carts

const array1 = [1,2,3,4]
// let initialVal =0 ;
const result = array1.reduce((acc,val)=>{ // it takes two parameters accumulator and current value of array
    return acc+val                          // first it takes initial value in accumulator and then current value 
},1)  // we can also give directly the initial value
console.log(result);

// example of shopping cart 


const cart = [
    {
        itemName: "js course",
        price: 1000
    },
    {
        itemName: "py course",
        price: 1200
    },
    {
        itemName: "mobile dev course",
        price: 1500
    },
    {
        itemName: "data science course",
        price: 1300
    },
]

const output = cart.reduce((acc,curVal)=>{
    return acc+curVal.price
},0)
console.log(output)


