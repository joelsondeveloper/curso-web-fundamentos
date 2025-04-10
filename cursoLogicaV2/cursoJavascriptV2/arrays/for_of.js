const arr = [1,2,3]
const obj = {
    nome: "Maria",
    idade: "28",
    email: "maria@server.com"
}

for (const prop in obj) {
    console.log(obj[prop])
}

for (const n of arr) {
    console.log(n)
}