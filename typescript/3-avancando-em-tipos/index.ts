// 1 - arrays 
let numbers: number[] = [1, 2, 3]

numbers.push(5)

console.log(numbers[2])

// numbers = "teste"

const nomes: string[] = ["Joelson", "Vicente"]

// nomes.push(4)

// 2 - outra sintaxe array 
const nums: Array<number> = [1, 2, 3]

nums.push(5)

console.log(nums)

// 3 - any 

const arr1: any = [1, 2, 3, "a", true]

console.log(arr1)

arr1.push([1, 2, 3])

console.log(arr1)

// 4 - parametros tipados 

function soma(a: number, b: number): number {
    return a + b
}

console.log(soma(1, 2))

// 5 - retorno de funções

function greeting(name: string): string {
    return `Ola ${name}`
}

console.log(greeting("Joelson"))
// console.log(greeting(1))

// 6 - função anonima 

setTimeout(function () {
    
    const sallary: number = 1000
    // console.log(parseFloat(sallary))

    // console.log(sallary)
    
}, 2000)

// 7 - tipos de objeto 
function passCordinates(coord: {x: number, y: number}) {
    console.log("X coords: " + coord.x)
    console.log("Y coords: " + coord.y)
}

const objCoord = {x: 10, y: 15}

passCordinates(objCoord)
// passCordinates({nome: 1, sobrenome: 2})

const pessoaObj: {nome: string, sobrenome: string} = {
    nome: "Joelson",
    sobrenome: "Vicente"
}

// 8 - props opcionais 
function showNumbers(a: number, b: number, c?: number) {
    console.log(a)
    console.log(b)
    if (c) {
        console.log(c)
    }
}

showNumbers(1, 2, 3)
showNumbers(1, 2)
// showNumbers(1)

// 9 - validando argumento opcional

function advancedGreeting(firstName: string, lastName?: string) {
    
    if (lastName !== undefined) {
        console.log(`Ola ${firstName} ${lastName}, tudo bem?`)
        return
    }

    console.log(`Ola ${firstName}, tudo bem?`)

}

advancedGreeting("Joelson", "Vicente")
advancedGreeting("Joelson")

// 10 - union types

function showBalance(balance: number | string) {
    console.log(`O saldo da conta e ${balance}`)
}

showBalance(100)
showBalance("500")
// showBalance(true)

const arr2: Array<string | number> = [1, "2", 3, "4"]

// 11 - avançando em union types

function showUserRoles(role: boolean | string) {
    
    if (typeof role === "boolean") {
        console.log("O usuario nao possui role")
        return
    }

    console.log(`O usuario possui a role ${role}`)
    
}

showUserRoles(false)
showUserRoles("admin")

// 12 - type alias 
type ID = number | string

function showId(id: ID) {
    console.log(`O id e ${id}`)
}

showId(1)
showId("2")

// 13 - interface 
interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj: Point) {
    console.log(`X: ${obj.x}, Y: ${obj.y}, Z: ${obj.z}`)
    
}

const coordObj: Point = {
    x: 10,
    y: 15,
    z: 20
}

showCoords(coordObj)

// 14 - interface x type alias
interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = {
    name: "Joelson",
    age: 30
}

console.log(somePerson)

type personType = {
    name: string
}

// type personType = {
//     age: number
// }

// const otherPerson: personType = {
//     name: "Joelson",
//     age: 25
// }

// console.log(otherPerson)

// 15 - literal types
let test: "testando" = "testando"

// test = "outro valor"

console.log(test)

function showDirection(direction: "esquerda" | "direita" | "frente" | "tras") {
    console.log(`Andando para a ${direction}`)
    
}

showDirection("esquerda")
// showDirection("outro")