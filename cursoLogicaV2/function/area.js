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

console.log(calcularAreaRetangulo(4, 3)); // 15
