let arr1 = ["a", "b", "c"]
let arr2 = [].concat(arr1)

arr2[arr2.length] = "d"
console.log(arr1)
console.log(arr2)