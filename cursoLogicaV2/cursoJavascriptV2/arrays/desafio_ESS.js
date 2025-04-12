function sum() {
  const numbers = []

  Array.prototype.forEach.call(arguments, function(el) {
    numbers.push(el)
  })

  return numbers.reduce(function(acumulador, atual) {
    return acumulador + atual
  }, 0)
}

console.log(sum(1, 2, 3, 4, 5))

function average() {
    const soma = sum.apply(null, arguments)
    return soma / arguments.length
}

console.log(average(1, 2, 3, 4, 5))