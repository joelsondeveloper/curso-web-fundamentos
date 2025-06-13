import somar from './soma.js';

function media(...notas) {
    const total = somar(...notas);
    return total / notas.length;
}

function teste() {
    console.log('teste');
}

const IP = '127.0.0.1'; 

function testarNome() {
    console.log('somar do arquivo media');
}

export { media, teste, IP, testarNome };