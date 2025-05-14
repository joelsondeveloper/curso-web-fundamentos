const teste = (function(){
    let n = 0
    return function testeInterno(){
        console.log("função interna", ++n)
        return "função interna " + n
    }
})()

let str = teste()
teste()
teste()
console.log(str)