// control statements are used to control the flow of program execution

// const number = 5
// if (number === 5) {
//     console.log("the number is 5")
// }
// else{
//     console.log("the number is not five");
// }

// another example

// const a = 5;
// const b = 9;
// const c= 7;
// if (a<b && a<c) {
//     console.log("a is smallest");
// }
// else if(b<a && b<c ){
//     console.log("b is smallest");
// }
// else {
//     console.log("c is smallest");
// }


// nested conditions

const userAccount =false;
const userLoggedIn = true;
const debitCard = true;
const zeroBalance =false;
if (userAccount) {
    console.log("you can login now !!")
    if (userLoggedIn || 2===2) {
        console.log("proceed to withdraw money");
        if (debitCard && !zeroBalance) {
            console.log("money withdrawn")
        }
         else{
            console.log("cannot withdraw money")
        }
    }
    else{
        console.log("Please login first");  
    }
}
else{
    console.log("create an account")
}

