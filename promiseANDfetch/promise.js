// promise returns either  response or error eventually of an operation
const promise1 = new Promise(function (resolve,reject){
setTimeout(function(){
    let error =true;
    if(!error){
resolve({name : "aakash",
        address : "butwal"
})          
}// we can also send object
else{
    reject(error)
}
    
console.log("timeout")
}
,1000)
    
}).then((obj)=>{  
   return obj.name
}).then((bob1)=>{  // we can also implement chaining
    console.log(bob1);
}
).catch((error)=>{
    console.log( "error occured");
})


// we can also use async await instead of then and catch, finally
const promise2 = new Promise(function (resolve,reject){
    setTimeout(function(){
        let error =true;
        if(!error){
    resolve({name : "aakash",
            address : "butwal"
    })          
    }// we can also send object
    else{
        reject(error)
    }
        
    console.log("timeout")
    }
    ,1000)
        
    })

    async function example() {
  try {
    const output = await promise2
    console.log(output);
    
  } catch (error) {
    console.log("error occured1");
    
  }
}
example()






// we can use url by
const promise3 = new Promise(function (resolve,reject){
    setTimeout(function(){
        let error =false;
        if(!error){
    resolve()          
    }
    else{
        reject(error)
    }
        
    console.log("timeout")
    }
    ,1000)
        
    })

    async function example() {
  try {
    const output = await fetch('https://randomuser.me/api/')
    const data = await output.json()
    console.log(data);
    
  } catch (error) {
    console.log("error occured1", error);
    
  }
}
example()