const CurrencyApi = require('./CurrencyAPI')

class Currency {
  static async getPriceInCurrency (total, currency) {
    try {
      const resp = await CurrencyApi.getLatestExchangeRate()
      const json = await resp.json()
      const rate = json.rates[currency]
      if (rate !== undefined) {
        // Checking if given currency is correct
        const price = total * rate
        return Number(price.toFixed(2))
      } else {
        throw new Error('No valid currency provided')
      }
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = Currency
