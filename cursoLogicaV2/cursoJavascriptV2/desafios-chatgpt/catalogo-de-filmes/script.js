const filmes = [
  { titulo: "Vingadores: Ultimato", nota: 8.4, genero: "Ação" },
  { titulo: "Homem-Aranha: Sem Volta Para Casa", nota: 8.3, genero: "Ação" },
  { titulo: "Se Beber, Não Case!", nota: 7.7, genero: "Comédia" },
  { titulo: "A Barraca do Beijo", nota: 5.9, genero: "Romance" },
  { titulo: "Parasita", nota: 8.6, genero: "Drama" },
  { titulo: "O Grito", nota: 4.9, genero: "Terror" },
  { titulo: "Invocação do Mal", nota: 7.5, genero: "Terror" },
  { titulo: "As Branquelas", nota: 7.0, genero: "Comédia" },
  { titulo: "Coringa", nota: 8.5, genero: "Drama" },
  { titulo: "Titanic", nota: 7.8, genero: "Romance" },
  { titulo: "Pantera Negra", nota: 7.3, genero: "Ação" },
  { titulo: "O Poço", nota: 7.0, genero: "Suspense" },
  { titulo: "O Auto da Compadecida", nota: 8.7, genero: "Comédia" },
  { titulo: "Velozes e Furiosos 9", nota: 5.2, genero: "Ação" },
  { titulo: "Annabelle", nota: 5.4, genero: "Terror" },
];

const outputRelatorio = document.getElementById("resultado");
const outputFilmes = document.getElementById("lista-filmes");

function mostrarTodos() {
    console.log("Mostrar todos os filmes");
    outputFilmes.textContent = "";
    outputRelatorio.textContent = "";
    filmes.forEach( function (el, i, _arr) {
        const filme = `${el.titulo} - ${el.genero} - ${el.nota}`;
        const p = document.createElement("p");
        p.textContent = filme;
        outputFilmes.appendChild(p);
    })
}

function filtrarPorGenero(genero) {
    console.log(`filtrar por gênero: ${genero}`);
    outputFilmes.textContent = "";
    outputRelatorio.textContent = "";
    const filmesFiltrados = filmes.filter( function (el, i, _arr) {
        return el.genero === genero;
    })
    filmesFiltrados.forEach( function (el, i, _arr) {
        const filme = `${el.titulo} - ${el.genero} - ${el.nota}`;
        const p = document.createElement("p");
        p.textContent = filme;
        outputFilmes.appendChild(p);
    })
}

function verificarNotasAltas() {
    console.log("verificar notas altas");
    outputFilmes.textContent = "";
    outputRelatorio.textContent = "";
    const temFilmesAltos = filmes.every( function (el, i, _arr) {
        return el.nota >= 7;
    })
    const filmesAltos = filmes.filter( function (el, i, _arr) {
        return el.nota >= 7;
    })

    if (temFilmesAltos) {
        outputRelatorio.textContent = "Todos os filmes têm notas altas.";
    } else {
        outputRelatorio.textContent = "Nem todos os filmes têm notas altas.";
    }

    filmesAltos.forEach( function (el, i, _arr) {
        const filme = `${el.titulo} - ${el.genero} - ${el.nota}`;
        const p = document.createElement("p");
        p.textContent = filme;
        outputFilmes.appendChild(p);
    })

}

function verificarFilmesRuins() {
    console.log("verificar notas ruins")
    outputFilmes.textContent = "";
    outputRelatorio.textContent = "";
    const temFilmesRuins = filmes.some( function (el, i, _arr) {
        return el.nota < 5
    })

    const filmesRuins = filmes.filter( function (el, i, _arr) {
        return el.nota < 5
    })

    if (temFilmesRuins) {
        outputRelatorio.textContent = "Existem filmes ruins.";
    } else {
        outputRelatorio.textContent = "Não existem filmes ruins.";
    }

    filmesRuins.forEach( function (el, i, _arr) {
        const filme = `${el.titulo} - ${el.genero} - ${el.nota}`;
        const p = document.createElement("p");
        p.textContent = filme;
        outputFilmes.appendChild(p);
    })
}

function gerarRelatorio() {
    console.log("gerar relatório")
    outputFilmes.textContent = "";
    outputRelatorio
    const relatorio = filmes.map( function (el, i, _arr) {
        return `${el.titulo} - ${el.genero} - ${el.nota} <hr>`;
    })

    const filme = relatorio
    const p = document.createElement("p");
        p.innerHTML = filme;
        outputFilmes.appendChild(p);
}