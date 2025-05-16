function criarCachorro(name) {
    let posicao = 0
    return {
        name,
        latir() {
            console.log(this.name + " fala: au au")
        },
        andar(distancia) {
            console.log(this.name + " anda " + distancia + " metros")
            posicao += distancia
        },
        comer() {
            console.log(this.name + " come")
        },
        get posicao() {
            return posicao
        }
    }
}

const rex = criarCachorro("rex")
rex.andar(10)
rex.andar(5)
console.log(rex.posicao)
console.log(rex)

const toto = criarCachorro("toto")
toto.andar(20)
toto.andar(-3)
console.log(toto.posicao)
console.log(toto)