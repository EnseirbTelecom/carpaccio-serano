class Bill {
    constructor(bill) {
        this.prices = bill.prices
        this.quantities = bill.quantities
        this.total = 0
        this.processTotal()
    }

    processTotal() {
        this.prices.forEach((price, index) => {
            this.total += price * this.quantities[index]
        })
    }

    /**
     * @return bill's total in JSON format
     */
    getBillTotal() {
        return {
            total: this.total
        }
    }
}

module.exports = Bill
