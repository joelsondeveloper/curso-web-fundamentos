
const calcRevealPattern = (function(){
    let n = 0

    function _chechNumber(n) {
        if (typeof n !== "number") {
            throw new Error("n precisa ser um número")
        }
    }

    function add(_n) {
        _chechNumber(_n)
        n += _n
        return this
    }

    function sub(_n) {
        _chechNumber(_n)
        n -= _n
        return this
    }

    function log() {
        console.log(n)
        return this
    }

    return {
        add,
        sub,
        log
    }
})()

console.log(calcRevealPattern)

calcRevealPattern.add(10)
calcRevealPattern.sub(5)
calcRevealPattern.log()

calcRevealPattern.add(10).sub(5).log()

calcRevealPattern.add("v")