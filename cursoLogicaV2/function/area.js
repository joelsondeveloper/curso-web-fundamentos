function calcularAreaRetangulo(l, a) {
  if (typeof l !== "number" || typeof a !== "number") {
    throw new Error("L e A precisam ser numeros");
  }
  return l * a;
}
function calcularAreaTriangulo(l, a) {
  if (typeof l !== "number" || typeof a !== "number") {
    throw new Error("L e A precisam ser numeros");
  }
  return (l * a) / 2;
}
function calcularAreaCirculo(r) {
  if (typeof r !== "number") {
    throw new Error("calcularAreaCirculo: R precisam ser numeros");
  }
  return Math.PI * (r ** 2);
}

console.log(calcularAreaRetangulo(4, 3)); // 15
