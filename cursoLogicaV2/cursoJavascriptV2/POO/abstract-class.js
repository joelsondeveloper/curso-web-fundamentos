class Animal{
    constructor(tipo){
        if (this.constructor === Animal){
            throw new Error("Não é uma instância")
        }
        if (tipo){
            this.tipo = tipo
        }
    }

    comer(){
        throw new Error("Método abstrato não implementado")
    }
}

class Gato extends Animal{
    constructor(nome){
        super("mamifero")
        this.nome = nome
    }

    comer(){
        console.log(`${this.nome} está comendo`)
    }
}

const mingal = new Gato("Mingal")