class Carrinho {
    #itens = [];

    get itens() {
        return [...this.#itens];
    }

    #obterIndice(produto) {
        return this.#itens.findIndex(item => item === produto);
    }

    adicionarItens(...produtos) {
        produtos.forEach(produto => {
            this.#itens.push(produto);
        });
    }

    removerItem(produto) {
        const indice = this.#obterIndice(produto);
        if (indice === -1) return; 
        this.#itens.splice(indice, 1);
    }

}

const carrinho = new Carrinho();
carrinho.adicionarItens("item 1", "item 2", "item 3");
console.log(carrinho.itens);
carrinho.removerItem("item 2");
console.log(carrinho.itens);
carrinho.itens.push("item 4");
console.log(carrinho.itens.length);