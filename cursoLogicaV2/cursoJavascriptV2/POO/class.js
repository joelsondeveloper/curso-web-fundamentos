function Animal(tipo) {
    if (this instanceof Animal) {
        
        if (tipo) {
          this.tipo = tipo;
        }
    } else {
        throw new Error("Não é uma instância")
    }
}

Animal.prototype.tipo = "desconhecido";


Animal.prototype.obterTipo = function () {
  return this.tipo;
};

// ES6
class AnimalC{
    constructor(tipo){
        if(tipo){

            this.tipo = tipo
        }
    }

    obterTipo(){
        
        return this.tipo
    }
}

AnimalC.prototype.tipo = "desconhecido"

let animal = new AnimalC("anfibio")
let sapo = new AnimalC()

// console.log(animal)
// console.log(cat)
// console.log(typeof animal)
// console.log(typeof cat)
// console.log(animal.obterTipo())
// console.log(cat.obterTipo())
console.log(AnimalC.prototype)
console.log(Animal.prototype)
