class Person {

    constructor(pname) {
        this.pname = pname
    }

    getName() {
        console.log(`Person name is ${this.pname}`)
    }

}

class Car {

    constructor(cname) {
        this.cname = cname

    }

    getCname() {
        console.log(`car name is ${this.cname}`)
    }

}

module.exports = { Person, Car }