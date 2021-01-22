/* eslint-env jest */
const fetch = require('node-fetch')

const CurrencyAPI = require('../../src/ServiceClasses/CurrencyService/CurrencyAPI')

fetch.dontMock()
test('fetch the good reponse', async () => {
  const reponse = await CurrencyAPI.getLatestExchangeRate()
  const json = await reponse.json()
  expect(json).toMatchSnapshot()
})
