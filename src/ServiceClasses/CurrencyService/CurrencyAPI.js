const fetch = require('node-fetch')

const getLatestExchangeRate = async () => {
  return await fetch('https://api.exchangeratesapi.io/latest')
}

class Currency {
  static getPriceInCurrency (total, currency) {
    return getLatestExchangeRate()
      .then((resp) => resp.json())
      .then((data) => {
        const rate = data.rates[currency]
        if (rate !== undefined) { // Checking if given currency is correct
          const price = total * rate
          return Number(price.toFixed(2))
        } else {
          throw new Error('No valid currency provided')
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

module.exports = Currency
