let numero = 1234567.890

console.log(numero.toFixed(5))
console.log(typeof numero.toFixed(5))

console.log(numero.toPrecision(15))
console.log(typeof numero.toPrecision(15))

console.log((123).toPrecision(6))

numero = 12.34567
console.log(numero.toExponential())
console.log(numero.toExponential(4))

numero = 15
console.log(numero.toString(2))
console.log(typeof numero.toString())

numero = 123456.789
console.log(numero.toLocaleString())
console.log(numero.toLocaleString("pt-BR"))
console.log(numero.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}))

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

let numeroAsString = "a3.456"
console.log(isNaN(numeroAsString))
console.log(numeroAsString, typeof numeroAsString, parseFloat(numeroAsString))