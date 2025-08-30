// 1 - arrays 
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
// numbers = "teste"
const nomes = ["Joelson", "Vicente"];
// nomes.push(4)
// 2 - outra sintaxe array 
const nums = [1, 2, 3];
nums.push(5);
console.log(nums);
// 3 - any 
const arr1 = [1, 2, 3, "a", true];
console.log(arr1);
arr1.push([1, 2, 3]);
console.log(arr1);
// 4 - parametros tipados 
function soma(a, b) {
    return a + b;
}
console.log(soma(1, 2));
// 5 - retorno de funções
function greeting(name) {
    return `Ola ${name}`;
}
console.log(greeting("Joelson"));
// console.log(greeting(1))
// 6 - função anonima 
setTimeout(function () {
    const sallary = 1000;
    // console.log(parseFloat(sallary))
    // console.log(sallary)
}, 2000);
// 7 - tipos de objeto 
function passCordinates(coord) {
    console.log("X coords: " + coord.x);
    console.log("Y coords: " + coord.y);
}
const objCoord = { x: 10, y: 15 };
passCordinates(objCoord);
// passCordinates({nome: 1, sobrenome: 2})
const pessoaObj = {
    nome: "Joelson",
    sobrenome: "Vicente"
};
// 8 - props opcionais 
function showNumbers(a, b, c) {
    console.log(a);
    console.log(b);
    if (c) {
        console.log(c);
    }
}
showNumbers(1, 2, 3);
showNumbers(1, 2);
// showNumbers(1)
// 9 - validando argumento opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        console.log(`Ola ${firstName} ${lastName}, tudo bem?`);
        return;
    }
    console.log(`Ola ${firstName}, tudo bem?`);
}
advancedGreeting("Joelson", "Vicente");
advancedGreeting("Joelson");
// 10 - union types
function showBalance(balance) {
    console.log(`O saldo da conta e ${balance}`);
}
showBalance(100);
showBalance("500");
// showBalance(true)
const arr2 = [1, "2", 3, "4"];
// 11 - avançando em union types
function showUserRoles(role) {
    if (typeof role === "boolean") {
        console.log("O usuario nao possui role");
        return;
    }
    console.log(`O usuario possui a role ${role}`);
}
showUserRoles(false);
showUserRoles("admin");
function showId(id) {
    console.log(`O id e ${id}`);
}
showId(1);
showId("2");
function showCoords(obj) {
    console.log(`X: ${obj.x}, Y: ${obj.y}, Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
const somePerson = {
    name: "Joelson",
    age: 30
};
console.log(somePerson);
// type personType = {
//     age: number
// }
// const otherPerson: personType = {
//     name: "Joelson",
//     age: 25
// }
// console.log(otherPerson)
// 15 - literal types
let test = "testando";
// test = "outro valor"
console.log(test);
function showDirection(direction) {
    console.log(`Andando para a ${direction}`);
}
showDirection("esquerda");
// showDirection("outro")
// 16 - non-null assertion operator
const p = document.getElementById("some-p");
console.log(p.innerHTML);
// 17 - bigint
let n;
n = 1000n;
console.log(n);
console.log(typeof n);
console.log(n * 2n);
// 18 - symbol
const symbol1 = Symbol("a");
const symbol2 = Symbol("a");
console.log(symbol1 === symbol2);
export {};
//# sourceMappingURL=index.js.map