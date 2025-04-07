function calcularMedia() {
  if (arguments.length === 0) {
    return "Error: nenhum argumento encontrado.";
  }
  let soma = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== "number" || isNaN(arguments[i])) {
      throw Error("Error: todos os argumentos devem ser números.");
      
    }
    soma += arguments[i];
  }
  let media = soma / arguments.length;
  return media;
}

console.log(calcularMedia(0)); // 0
console.log(calcularMedia(2, 5)); // 3.5
console.log(calcularMedia(2, 6, 1, 1, 2, 6)); // 3
console.log(calcularMedia(2, 6, 1, 1, 2, "a")); // Error: todos os argumentos devem ser números.