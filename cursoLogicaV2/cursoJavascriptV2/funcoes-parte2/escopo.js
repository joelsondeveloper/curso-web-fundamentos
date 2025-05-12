const str = "variavel global"

function teste(str){
    console.log(this)
    console.log(str)
}

// teste("parametro passado para a função")

const obj = {
    str: "variavel local",
    teste
}

obj.teste("parametro passado para a função")

const teste2 = () => {
    console.log(this)
    console.log("arrow function")
}

teste2()