class Carrinho {
    #produtos

    constructor() {
        this.#produtos = [];
    }

    get produtos() {
        return [...this.#produtos];
    }

    adicionar(produto) {
        this.#produtos.push(produto);
    }
}

const carrinho = new Carrinho();
carrinho.adicionar("Notebook");
carrinho.adicionar("Celular");

console.log(carrinho.produtos);

carrinho.produtos.push("Mouse");