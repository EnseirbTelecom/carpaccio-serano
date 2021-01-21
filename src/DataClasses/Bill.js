const Discount = require('../ServiceClasses/DiscountService/Discount')
const TVA = require('../ServiceClasses/TVAService/TVA')
const Currency = require('../ServiceClasses/CurrencyService/CurrencyAPI')

class Bill {
  constructor (bill) {
    this.prices = bill.prices
    this.quantities = bill.quantities
    this.country = bill.country
    this.discount = bill.discount ? bill.discount : false
    this.currency = bill.currency ? bill.currency : false
    this.total = 0
  }

  isBillCorrect () {
    const billIsUndefined =
      this.prices === undefined ||
      this.quantities === undefined ||
      this.country === undefined

    if (billIsUndefined === true) {
      return false
    } else {
      const billHasDifferentArrayLengths =
        this.prices.length !== this.quantities.length
      const pricesHaveNegativeValue = this.prices.some(v => v < 0)
      const quantitiesHaveNegativeValue = this.quantities.some(v => v < 0)
      const countryIsNotCorrect = !TVA.isCountryCorrect(this.country)

      return !(
        billHasDifferentArrayLengths === true ||
        pricesHaveNegativeValue === true ||
        quantitiesHaveNegativeValue === true ||
        countryIsNotCorrect === true
      )
    }
  }

  async processTotal () {
    if (this.isBillCorrect() === true) {
      this.total = 0
      this.prices.forEach((price, index) => {
        this.total += price * this.quantities[index]
      })

      // Adding TVA to the total
      try {
        this.total += TVA.getTVA(this.total, this.country)
      } catch (e) {
        this.total = -1
      }

      // Apply Discount
      if (this.discount) {
        try {
          this.total = Discount.getDiscount(this.total, this.discount)
        } catch (e) {
          this.total = -1
        }
      }

      // Apply exchange rate
      if (this.currency) {
        try {
          console.log('Total before exchange rate is : ' + this.total)
          this.total = await Currency.getPriceInCurrency(this.total, this.currency)
          console.log('Total after exchange rate is : ' + this.total)
        } catch (e) {
          this.total = -1
        }
      }
    } else {
      this.total = -1
    }
  }

  /**
   * @return bill's total in JSON format
   */
  getBillTotal () {
    // TODO : Don't return anything while isLoading is still true
    // Because now it returns the total before receiving the total in correct currency
    if (this.total === -1) {
      throw new Error('error in request')
    }
    return {
      total: this.total
    }
  }
}

module.exports = Bill
