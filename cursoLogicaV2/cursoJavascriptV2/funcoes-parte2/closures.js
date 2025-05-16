const teste = (function(n){
    return function testeInterno(){
        console.log("função interna", ++n)
        return "função interna " + n
    }
})(10)

let str = teste()
teste()
teste()
console.log(str)