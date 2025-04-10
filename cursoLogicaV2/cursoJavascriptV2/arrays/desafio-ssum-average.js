function sum() {
    const numbers = Array.from(arguments)
    let soma = 0
    for (const prop of numbers) {
        soma += prop
    }
    return soma
    
}

function average() {
    let soma = sum(...arguments)
    let media = soma / arguments.length
    return media
}

console.log(average(3,4,5,5,6))