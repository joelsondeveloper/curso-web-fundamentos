function formatarNome(nomeCompleto) {
    nomeCompleto = nomeCompleto.trim()
    const arrNome = nomeCompleto.split(" ")

    if(arrNome.length == 2) {
        return `${arrNome[1]}, ${arrNome[0]}`
    } else if (arrNome.length >= 3) {
        return `${arrNome[arrNome.length - 2]} ${arrNome[arrNome.length - 1]}, ${arrNome[0]}`
    } else {
        return arrNome[0]
    }
}

console.log(formatarNome("Joelson Vicente Quintino"))