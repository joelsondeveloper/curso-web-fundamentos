const str = "variavel global"

function teste(str){
    console.log(this)
    console.log(str)

    console.log("-----------")
    setTimeout(() => {
        console.log(this)
    }, 2000)
}

// teste("parametro passado para a função")

const obj = {
    str: "variavel local",
    teste
}

obj.teste("parametro passado para a função")

const teste2 = () => {
    console.log("arrow function")
    // console.log(this)
}

teste2()