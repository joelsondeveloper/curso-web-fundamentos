let x = [10]
let y = {n: 10}

function mudaX(n) {
    n.push(11)
    console.log("n interno", n)
}

function mudaY(n) {
    n.n++
    console.log("n interno", n)
}

mudaX(x)
console.log("x externo", x)

mudaY(y)
console.log("y externo", y)