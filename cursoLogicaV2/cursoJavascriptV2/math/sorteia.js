function getRandomNumber(inicio = 0, fim = 10, integer = true) {
  if (integer) {
    return Math.floor(Math.random() * (fim - inicio + 1) + inicio)
  } else {
    return Math.random() * (fim - inicio + 1) + inicio
  }
}

console.log(getRandomNumber(5, 10, true));

