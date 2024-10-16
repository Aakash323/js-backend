const myobj = {
    _name : "Apple",
    _email:"dadsa@gmail.com",
    _password : "abc1234",

    get email(){
        return `${this._email}haha`.toUpperCase()
    },
    set email(value){
        this._email = value
    },
    get name(){
        return this._name.toUpperCase()
    },
    set name(value){
        this._name = value
    },
    get password(){
        return this._password.toUpperCase()
    },
    set password(value){
        this._password = value
    },
}

console.log(myobj.name);
console.log(myobj.email);
console.log(myobj.password);

// const obj = Object.create(myobj)
// we can also make a new object by taking reference from another object
// we can access property of the object from the new object



