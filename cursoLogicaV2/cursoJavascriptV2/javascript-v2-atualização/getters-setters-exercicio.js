class Produto {

    #itensEstoque
    #contador

    constructor(nome, itensEstoque) {
        this._nome = nome;
        this.#itensEstoque = (typeof itensEstoque === "number" && itensEstoque > 0) ? itensEstoque : 0;
        this.#contador = 0;
    }

    get itensEstoque() {
        console.log(this.#contador);
        return this.#itensEstoque;
    }

    comprar(quantidade) {
        if (quantidade <= 0) {
            console.log("Quantidade não pode ser negativa ou zero");
            return;
        } else if (isNaN(quantidade)) {
            console.log("Quantidade precisa ser um número");
            return;
        } else if (quantidade > this.#itensEstoque) {
            console.log("Quantidade não pode ser maior que o estoque");
            return;
        }
        this.#itensEstoque -= quantidade;
        this.#contador++;
    }

    adicionarEstoque(quantidade) {
        if (quantidade <= 0) {
            console.log("Quantidade não pode ser negativa ou zero");
            return;
        } else if (isNaN(quantidade)) {
            console.log("Quantidade precisa ser um número");
            return;
        }
        this.#itensEstoque += quantidade;
    }
}


const produto1 = new Produto("notebook", 10);
console.log(produto1);