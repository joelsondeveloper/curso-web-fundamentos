n = 10
nObj = new Number(10)

console.log(n instanceof Number)
console.log(nObj instanceof Number)
console.log(n.constructor)
console.log(nObj.constructor)
console.log("------------------")

const arr1 = [1, 2, 3]
const arr2 = new Array(1, 2, 3)

console.log(arr1 instanceof Array)
console.log(arr2 instanceof Array)
console.log("------------------")

const regex1 = /a/g
const regex2 = new RegExp()

console.log(regex1 instanceof RegExp)
console.log(regex2 instanceof RegExp)
console.log("------------------")

console.log(typeof function () {})
const fn = function () {}
console.log(fn instanceof Function)
