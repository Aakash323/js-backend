// there are certain values that are assumed as true and false

// false values
// 0,-0,false,"",null,undefined,NaN

// true values
// 1, true, " ", [] ,"0","false or any string",function()


// Nullish coalesing operator (??) Undefined Null 
// this is used to check whether  the value is null or undefined or not

let value;
value = 10 ?? null
console.log(value);

