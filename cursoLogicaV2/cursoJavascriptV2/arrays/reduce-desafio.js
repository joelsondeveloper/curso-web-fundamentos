const numeros = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9];
// const numerosUnicos = [1, 3, 4, 5, 8, 9];

let numerosUnicos = numeros.reduce( function (num, numAtual){
    if (num.indexOf(numAtual) == -1) {
        num.push(numAtual);
    }

    return num;
}, [] )

console.log(numerosUnicos);