// maps method is used to perform some operation in the array 
// we can also chain it with filter to get desired output

const numbers = [1,2,3,4,11,22,33,44,55,66]
const result = numbers.filter((item)=>{
    return item>10
}).map((data)=>{
    return data/11
})
console.log(result);
