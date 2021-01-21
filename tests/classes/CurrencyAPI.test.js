/* eslint-env jest */

const CurrencyAPI = require('../../src/ServiceClasses/CurrencyService/CurrencyAPI')

test('fetch the good reponse', async () => {
  const reponse = await CurrencyAPI.getLatestExchangeRate()
  const json = await reponse.json()
  console.log(json)
  expect(json).toMatchSnapshot()
})
