class Bill {
    constructor(bill) {
        this.prices = bill.prices
        this.quantities = bill.quantities
        this.total = 0
        this.processTotal()
    }

    isBillCorrect() {
        let billIsUndefined = (this.prices == undefined || this.quantities == undefined)

        if (billIsUndefined === true) {
            return false
        } else {
            let billHasDifferentArrayLengths = (this.prices.length != this.quantities.length)
            let pricesHaveNegativeValue = this.prices.some(v => v < 0);
            let quantitiesHaveNegativeValue = this.quantities.some(v => v < 0);

            return billHasDifferentArrayLengths === true ||
                pricesHaveNegativeValue === true ||
                quantitiesHaveNegativeValue === true ?
                false :
                true

        }
    }

    processTotal() {
        if (this.isBillCorrect() === true) {
            this.total = 0
            this.prices.forEach((price, index) => {
                this.total += price * this.quantities[index]
            })
        } else {
            this.total = -1
        }
    }

    /**
     * @return bill's total in JSON format
     */
    getBillTotal() {
        if (this.total === -1) {
            return {
                error: "error in request"
            }
        }
        return {
            total: this.total
        }
    }
}

module.exports = Bill