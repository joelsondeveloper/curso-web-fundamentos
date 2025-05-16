const calc = {
    value: 0,
    add(n) {
        this.value += n
        return this
    },
    sub(n) {
        this.value -= n
        return this
    },
    log() {
        console.log(this.value)
    }
}
console.log(calc.add(10).sub(5).log())