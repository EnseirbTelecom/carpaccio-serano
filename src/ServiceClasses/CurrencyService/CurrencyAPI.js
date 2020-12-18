const fetch = require('node-fetch')

const getLatestExchangeRate = async () => {
  return await fetch('https://api.exchangeratesapi.io/latest')
}

module.exports = {
  getLatestExchangeRate
}
