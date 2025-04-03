let x = 10
x = "uma string"
console.log(x);

let msg = "Olá, \"mundo!"

console.log(msg);

console.log("2" * 2)

function teste() {
    console.log(this)
}

teste()

const obj = {
    nome: "Joelson",
    idade: 20,
    cidade: "São Paulo",
    funcao: function() {
        console.log(this.nome)
    }
}

obj.funcao()