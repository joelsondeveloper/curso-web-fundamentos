let name = "Joelson"
let name2 = "Joelson 2"

function teste(str, n){
    console.log(this.name)
    console.log(str, n)
}

// teste("string", 10)

teste.call({name: "maria"}, "string", 10)
teste.apply({name: "jose"}, ["string", 10])
teste.call({name: "joelson"}, ...["string", 15])

const teste2 = teste.bind({name: "quintino"})
teste2("string", 10)