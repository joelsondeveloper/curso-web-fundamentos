const teste = function(cb) {
    console.log('função teste')
    if (typeof cb !== 'function') {
        throw new Error('callback não é uma função')
    }
    cb("passado por parametro pra cb")
}

const fn = function(p) {
    console.log('função anonima de callback')
    console.log(p)
}
// fn(30)

teste(fn)