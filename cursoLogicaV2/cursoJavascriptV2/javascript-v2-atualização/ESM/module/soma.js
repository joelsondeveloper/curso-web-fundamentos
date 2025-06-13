export default function somar(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

export function testarNome() {
    console.log('somar do arquivo soma.js');
}

function fnInterna() {
    console.log('fnInterna');
}