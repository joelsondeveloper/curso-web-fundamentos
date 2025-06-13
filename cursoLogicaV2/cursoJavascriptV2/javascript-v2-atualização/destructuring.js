const pessoa = {
    nome: "joelson",
    sobrenome: "vicente",
    empresa: "Mega",
    cargo: "Desenvolvedor"
}

// sem destructuring
// let empresa = pessoa.empresa;

// com destructuring
const { empresa: companhia } = pessoa;

console.log(companhia);

function dizOla({nome, sobrenome}) {
    const nomeCompleto = sobrenome ? `${nome} ${sobrenome}` : nome;
    return `Olá ${nomeCompleto}, seja bem vindo!`	
}

const pessoa2 = {
    nome: "joão",
    idade: 20
}

console.log(dizOla({nome: "joelson", sobrenome: "vicente"}));
console.log(dizOla(pessoa2));