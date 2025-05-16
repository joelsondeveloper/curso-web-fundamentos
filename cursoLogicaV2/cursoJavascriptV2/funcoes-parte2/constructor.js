function Cachorro(name) {
    let posicao = 0
    this.name = name
    this.latir = function() {
        console.log(this.name + " fala: au au")
    }

    this.andar = function(distancia) {
        console.log(this.name + " anda " + distancia + " metros")
        posicao += distancia
        console.log(this.name + " está na posição " + posicao + " metros")
    }
}

const rex = new Cachorro("rex")
const toto = new Cachorro("toto")


rex.latir()
rex.andar(10)
console.log(rex)

const laicao = new Cachorro("laicão")
laicao.latir()
laicao.andar(5)
console.log(laicao)