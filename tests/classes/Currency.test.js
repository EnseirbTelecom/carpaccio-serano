/* eslint-env jest */

const Currency = require('../../src/ServiceClasses/CurrencyService/Currency')
const fetchMock = require('node-fetch')

const totalPrice = 15.0
const currencies = {
  rates: {
    CAD: 1.5379,
    HKD: 9.3804,
    ISK: 157.2,
    PHP: 58.122,
    DKK: 7.4382,
    HUF: 357.38,
    CZK: 26.125,
    AUD: 1.5666,
    RON: 4.8738,
    SEK: 10.1383,
    IDR: 17004.08,
    INR: 88.368,
    BRL: 6.439,
    RUB: 89.085,
    HRK: 7.5635,
    JPY: 125.62,
    THB: 36.315,
    CHF: 1.0778,
    SGD: 1.6054,
    PLN: 4.5322,
    BGN: 1.9558,
    TRY: 9.0111,
    CNY: 7.8292,
    NOK: 10.323,
    NZD: 1.6965,
    ZAR: 18.1101,
    USD: 1.2101,
    MXN: 23.7719,
    ILS: 3.9373,
    GBP: 0.88563,
    KRW: 1333.62,
    MYR: 4.8949
  },
  base: 'EUR',
  date: '2021-01-20'
}

describe('Currency class', () => {
  afterEach(() => {
    fetchMock.resetMocks()
  })

  test('should have a static method getPriceInCurrency that return the total price in the currency asked (CAD)', async () => {
    fetchMock.mockResponse(JSON.stringify(currencies))

    const currency = 'CAD'
    await expect(Currency.getPriceInCurrency(totalPrice, currency)).resolves.toBe(23.07)
  })

  test('should have a static method getPriceInCurrency that return the total price in the currency asked (GBP)', async () => {
    fetchMock.mockResponse(JSON.stringify(currencies))

    const currency = 'GBP'
    await expect(Currency.getPriceInCurrency(totalPrice, currency)).resolves.toBe(13.28)
  })

  test('should have a static method getPriceInCurrency that throws an error if the currency asked does not exist (AAA)', async () => {
    fetchMock.mockResponse(JSON.stringify(currencies))

    const currency = 'AAA'
    await expect(Currency.getPriceInCurrency(totalPrice, currency)).rejects.toThrowError(
      new Error('No valid currency provided')
    )
  })

  test('should have a static method getPriceInCurrency that throws an error if the currency API throws an error', async () => {
    fetchMock.mockReject(new Error('Fake error message'))

    const currency = 'CAD'
    await expect(Currency.getPriceInCurrency(totalPrice, currency)).rejects.toThrowError(
      new Error('Fake error message')
    )
  })
})
