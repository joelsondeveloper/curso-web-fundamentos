function teste(str) {
    console.log("function expression teste", str)
    return "fn expression" + str
}

const t1 = teste("parametro passado para a função expression")
console.log(t1)

const testeArrow = (str, n) => "fn arrow - " + str + " - " + n

const testeArrow2 = () =>  {name: "fn expression"}


const t2 = testeArrow("parametro passado para a arrow function", 10)
console.log(t2)

console.log(testeArrow2())