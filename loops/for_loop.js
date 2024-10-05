// for loop is used when the no of loops to be executed is known

for (let i =0 ; i<10; i++) {
  console.log(`value is ${i}`);
        for(j=0; j<10; j++){
            console.log(i + '*' + j + '=' + i*j)
        }
}

// we can use for loop to get array elements

const array1=["apple","ball","cat"]
for(i=0;i<array1.length;i++){
    console.log(array1[i])
}

// we can also use break and continue in loops

for(i=1;i<5;i++){
    console.log(i)
    if(i==3){
        console.log("no is 3");
        // break;
        continue;
    }
}