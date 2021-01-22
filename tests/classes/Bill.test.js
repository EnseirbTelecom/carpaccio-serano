/* eslint-env jest */

const Bill = require('../../src/DataClasses/Bill.js')
const fetch = require('node-fetch')

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

afterEach(() => {
  fetch.resetMocks()
})
test('{"prices" : [10, 20], "quantities" : [1, 2]} total throws Bad request.', async () => {
  const bill = { prices: [10, 20], quantities: [1, 2] }
  const tmpBill = new Bill(bill)
  await expect(tmpBill.processTotal()).rejects.toThrowError(
    new Error('Bad request')
  )
})

test('{"prices" : [], "quantities" : []} total throws Bad request.', async () => {
  const bill = { prices: [], quantities: [] }
  const tmpBill = new Bill(bill)
  await expect(tmpBill.processTotal()).rejects.toThrowError(
    new Error('Bad request')
  )
})

test('{"prices" : [-10, 20], "quantities" : [1, 2]} total throws Bad request.', async () => {
  const bill = { prices: [-10, 20], quantities: [1, 2] }
  const tmpBill = new Bill(bill)
  await expect(tmpBill.processTotal()).rejects.toThrowError(
    new Error('Bad request')
  )
})

test('{"prices" : [10, 20], "quantities" : [-1, 2]} total throws Bad request.', async () => {
  const bill = { prices: [10, 20], quantities: [-1, 2] }
  const tmpBill = new Bill(bill)
  await expect(tmpBill.processTotal()).rejects.toThrowError(
    new Error('Bad request')
  )
})

test('{"prices" : [10, 20, 30], "quantities" : [1, 2]} total throws Bad request.', async () => {
  const bill = { prices: [10, 20, 30], quantities: [1, 2] }
  const tmpBill = new Bill(bill)
  await expect(tmpBill.processTotal()).rejects.toThrowError(
    new Error('Bad request')
  )
})

test('{"prices" : [10, 20], "quantities" : [1, 2, 3]} total throws Bad request.', async () => {
  const bill = { prices: [10, 20], quantities: [1, 2, 3] }
  const tmpBill = new Bill(bill)
  await expect(tmpBill.processTotal()).rejects.toThrowError(
    new Error('Bad request')
  )
})

test('{"quantities" : [1, 2]} total throws Bad request.', async () => {
  const bill = { quantities: [1, 2] }
  const tmpBill = new Bill(bill)
  await expect(tmpBill.processTotal()).rejects.toThrowError(
    new Error('Bad request')
  )
})

test('{"prices" : [10,20]} total throws Bad request.', async () => {
  const bill = { prices: [10, 20] }
  const tmpBill = new Bill(bill)
  await expect(tmpBill.processTotal()).rejects.toThrowError(
    new Error('Bad request')
  )
})

test('{} total throws "Bad request".', async () => {
  const bill = {}
  const tmpBill = new Bill(bill)
  await expect(tmpBill.processTotal()).rejects.toThrowError(
    new Error('Bad request')
  )
})

test('{"prices" : [10, 20], "quantities" : [1, 2], "country" : "FR"} total returns {"total" : 60}.', () => {
  const bill = { prices: [10, 20], quantities: [1, 2], country: 'FR' }
  const tmpBill = new Bill(bill)
  tmpBill.processTotal()
  expect(tmpBill.getBillTotal()).toStrictEqual({ total: 60 })
})

test('{"prices" : [15.99, 11.99], "quantities" : [1, 2], "country" : "ES"} total returns {"total" : 47,56}.', () => {
  const bill = { prices: [15.99, 11.99], quantities: [1, 2], country: 'ES' }
  const tmpBill = new Bill(bill)
  tmpBill.processTotal()
  expect(tmpBill.getBillTotal()).toStrictEqual({ total: 47.56 })
})

test('{"prices" : [15.99, 11.99], "quantities" : [1, 2], "country" : "ZZ"} total throws "No valid country provided for TVA".', async () => {
  const bill = { prices: [15.99, 11.99], quantities: [1, 2], country: 'ZZ' }
  const tmpBill = new Bill(bill)
  await expect(tmpBill.processTotal()).rejects.toThrowError(
    new Error('No valid country provided for TVA')
  )
})

test('{"prices" : [15.99, 11.99], "quantities" : [1, 2], currency: "TOTO"} total throws "No valid currency provided".', async () => {
  fetch.mockResponse(JSON.stringify(currencies))
  const bill = {
    prices: [15.99, 11.99],
    quantities: [1, 2],
    currency: 'TOTO',
    country: 'FR'
  }
  const tmpBill = new Bill(bill)
  await expect(tmpBill.processTotal()).rejects.toThrowError(
    new Error('No valid currency provided')
  )
})
