const arr = [1, 5, 10, "ola", true]

let sohNum = arr.some( function (el) {
    return typeof el === "number" && el > 20
})

let arr1 = arr.filter( function (el, i, _arr) {
    return typeof el === "number"
})

arr.forEach( function (el, i, _arr) {
    console.log(el, i)
})

let arr2 = arr1.map( function (el, i, _arr) {
    return el ** 2

})

console.log(arr1)
console.log(arr2)
