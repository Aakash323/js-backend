function user(name, address , email , contact) 
{
    this.name = name;
    this.address = address;
    this.email = email;
    this.contact = contact;
}
const userData = new user("aakash","butwal","aabb@gmail.com",9874745122)
const userdata = new user("apple","nepal","abc@gmail.com",9595959595)
console.log(userData.name);
console.log(userdata.name);


// another example using object


const user11 = {
    name : "ram",
    address : "canada",
    age : 22,
    getMsg : function getAlert(name){
        console.log(this.name);
        
    }
}
console.log(user11);
console.log(user11.getMsg());

