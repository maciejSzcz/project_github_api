class Ulamek {
    constructor(numerator, denumerator) {
        this.numerator = numerator;
        this.denumerator = denumerator;
    }

    multiplyBy(num) {
        if(typeof num === "object") {
            this.numerator = this.numerator * num.numerator
            this.denumerator = this.denumerator * num.denumerator
        } else {
            this.numerator = this.numerator * num
        }
    }

    static multiply(x, y) {
        return new Ulamek(x.numerator * y.numerator, x.denumerator * y.denumerator)
    }

    print() {
        console.log(`${this.numerator}/${this.denumerator}`)
    }
}

const ulamek1 = new Ulamek(4, 6);
const ulamek2 = new Ulamek(3, 9);
ulamek1.print()
ulamek2.print()
ulamek1.multiplyBy(ulamek2)
ulamek1.print()

const newnew = Ulamek.multiply(ulamek1, ulamek2)
newnew.print()