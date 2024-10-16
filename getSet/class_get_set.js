class user{
    constructor(name,email,password){
        this.name = name
        this.email = email
        this.password = password
    }
    get name(){
        return `${this._name}dai`.toUpperCase()
    }
    set name(value){
        this._name = value;
    }
    get email(){
        return `${this._email} horaaaaaa`.toUpperCase()
    }
    set email(value){
        this._email = value;
    }
    get password(){
        return `${this._password},smsxe47`
    }
    set password(value){
        this._password = value;
    }

}

const ram = new user("aakash","abc@gmail.com","Abc123")
console.log(ram);
console.log(ram.name);
console.log(ram.email);
console.log(ram.password);

