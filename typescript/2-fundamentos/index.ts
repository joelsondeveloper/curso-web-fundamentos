// 1 - number
let x: number = 10

console.log(x)

x = 16

console.log(typeof x)

const y: number = 15.273662

console.log(y)

console.log(y.toPrecision(3))

// 2 - string
const firstName: string = "Joelson"

console.log(firstName.toUpperCase())

let fullName: string

const lastName: string = "Vicente"

fullName = `${firstName} ${lastName}`

console.log(fullName)

console.log(typeof fullName)

// 3 - boolean
let a: boolean = false

console.log(a)

console.log(typeof a)

a = true

console.log(a)

// 4 - inference e annotations
let ann: string = "Teste"

let inf = "Teste"

// ann = 1
// inf = 1

console.log("testando...3")