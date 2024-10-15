// call is used to call a function insisde another function
// call transfers the execution context  to another function 

function game(name){
    this.name = name
}
function gamess(name,id, players){
  
    game.call(this,name)  // game.call is calling another function and this is taken as reference of game function
    this.id = id
    this.players= players
}

const names = new gamess("aakash",123,100)
console.log(names);
