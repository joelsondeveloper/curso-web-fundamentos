function Animal(tipo){
    if (tipo){
        this.tipo = tipo
    }
}


Animal.prototype.tipo = "desconhecido"

let dog = new Animal("mamifero")
let cat = new Animal("mamifero")
let snake = new Animal("reptil")
let fish = new Animal()

let arr = new Array(1,2,3)

Animal.prototype.obterTipo = function(){
    return this.tipo
}

console.log(fish.tipo)