// ES5
function Animal(){

}

Animal.prototype.whoAmI = function(){
    return this
}

Animal.categoria = "ser vivo"

const dog = new Animal()

// ES6
class Cachorro {
    constructor(){
        this.nome = this.nome
    }

    static comer(){
        console.log(this)
        console.log(`comendo`)
        this.beber()
    }

    static beber(){
        console.log(`beber`)
    }
}

const dog2 = new Cachorro("rex")
console.log(dog2)
Cachorro.comer()