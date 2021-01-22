/* eslint-env jest */

const app = require('../../app')
const supertest = require('supertest')
const request = supertest(app)
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

it('Gets the bill endpoint with { prices: [10, 20], quantities: [1, 2], country: "FR" }', async done => {
  // Sends GET Request to /test endpoint
  const response = await request
    .post('/bill')
    .send({ prices: [10, 20], quantities: [1, 2], country: 'FR' })
  expect(response.status).toBe(200)
  expect(response.body).toStrictEqual({
    total: 60
  })
  done()
})

it('Gets the bill endpoint with { prices: [10, 20], quantities: [1, 2], discount: NO_DISCOUNT, country: FR }', async done => {
  // Sends GET Request to /test endpoint
  const response = await request.post('/bill').send({
    prices: [10, 20],
    quantities: [1, 2],
    discount: 'NO_DISCOUNT',
    country: 'FR'
  })
  expect(response.status).toBe(200)
  expect(response.body).toStrictEqual({
    total: 60
  })
  done()
})

it('Gets the bill endpoint with { prices: [500, 300], quantities: [1, 2], discount: PROGRESSIVE_DISCOUNT, country: FR }', async done => {
  // Sends GET Request to /test endpoint
  const response = await request.post('/bill').send({
    prices: [500, 300],
    quantities: [1, 2],
    discount: 'PROGRESSIVE_DISCOUNT',
    country: 'FR'
  })
  expect(response.status).toBe(200)
  expect(response.body).toStrictEqual({
    total: 1280.4
  })
  done()
})

it('Gets the bill endpoint with { prices: [500, 300], quantities: [1, 2], discount: FLAT_DISCOUNT, country: FR }', async done => {
  // Sends GET Request to /test endpoint
  const response = await request.post('/bill').send({
    prices: [500, 300],
    quantities: [1, 2],
    discount: 'FLAT_DISCOUNT',
    country: 'FR'
  })
  expect(response.status).toBe(200)
  expect(response.body).toStrictEqual({
    total: 924
  })
  done()
})

it('Gets the bill endpoint with { prices: [500, 300], quantities: [1, 2], discount: FIXED_DISCOUNT, country: FR }', async done => {
  // Sends GET Request to /test endpoint
  const response = await request.post('/bill').send({
    prices: [500, 300],
    quantities: [1, 2],
    discount: 'FIXED_DISCOUNT',
    country: 'FR'
  })
  expect(response.status).toBe(200)
  expect(response.body).toStrictEqual({
    total: 1120
  })
  done()
})

it('Gets the bill endpoint with { prices: [500, 300], quantities: [1, 2], country: FR, currency: CAD }', async done => {
  fetch.mockResponse(JSON.stringify(currencies))
  const response = await request.post('/bill').send({
    prices: [500, 300],
    quantities: [1, 2],
    country: 'FR',
    currency: 'CAD'
  })
  expect(response.status).toBe(200)
  expect(response.body).toStrictEqual({
    total: 2030.03
  })
  done()
})

it('Gets the bill enpoint with an error in the currency Type', async done => {
  fetch.mockResponse(JSON.stringify(currencies))
  const response = await request.post('/bill').send({
    prices: [500, 300],
    quantities: [1, 2],
    country: 'FR',
    currency: 'TOTO'
  })
  expect(response.status).toBe(400)
  expect(response.body.error).toBe('No valid currency provided')
  done()
})

it('Gets the bill enpoint with an error in the fetch', async done => {
  fetch.mockReject(new Error('fake error message'))
  const response = await request.post('/bill').send({
    prices: [500, 300],
    quantities: [1, 2],
    country: 'FR',
    currency: 'TOTO'
  })
  expect(response.status).toBe(400)
  expect(response.body.error).toBe('fake error message')
  done()
})

it('Gets the bill endpoint with an error on the discount type', async done => {
  // Sends GET Request to /test endpoint
  const response = await request.post('/bill').send({
    prices: [500, 300],
    quantities: [1, 2],
    discount: 'dummy_one',
    country: 'FR'
  })
  expect(response.status).toBe(400)
  expect(response.body.error).toBe('No valid discount type profided')
  done()
})

it('Gets the bill endpoint with an error on the price (negative)', async done => {
  // Sends GET Request to /test endpoint
  const response = await request.post('/bill').send({
    prices: [-100, 300],
    quantities: [1, 2],
    country: 'FR'
  })
  expect(response.status).toBe(400)
  expect(response.body.error).toBe('Bad request')
  done()
})

it('Gets the bill endpoint with an error on the price (no price)', async done => {
  // Sends GET Request to /test endpoint
  const response = await request.post('/bill').send({
    prices: [],
    quantities: [1, 2],
    country: 'FR'
  })
  expect(response.status).toBe(400)
  expect(response.body.error).toBe('Bad request')
  done()
})

it('Gets the bill endpoint with an error on the quantities (no quantities)', async done => {
  // Sends GET Request to /test endpoint
  const response = await request.post('/bill').send({
    prices: [100, 300],
    quantities: [],
    country: 'FR'
  })
  expect(response.status).toBe(400)
  expect(response.body.error).toBe('Bad request')
  done()
})

it('Gets the bill endpoint with an error on the quantities (negative)', async done => {
  // Sends GET Request to /test endpoint
  const response = await request.post('/bill').send({
    prices: [100, 300],
    quantities: [-1, 2],
    country: 'FR'
  })
  expect(response.status).toBe(400)
  expect(response.body.error).toBe('Bad request')
  done()
})

it('Gets the bill endpoint with an error (not enough prices)', async done => {
  // Sends GET Request to /test endpoint
  const response = await request.post('/bill').send({
    prices: [100],
    quantities: [1, 2],
    country: 'FR'
  })
  expect(response.status).toBe(400)
  expect(response.body.error).toBe('Bad request')
  done()
})

it('Gets the bill endpoint with an error (not enough quantities)', async done => {
  // Sends GET Request to /test endpoint
  const response = await request.post('/bill').send({
    prices: [100, 200],
    quantities: [1],
    country: 'FR'
  })
  expect(response.status).toBe(400)
  expect(response.body.error).toBe('Bad request')
  done()
})

it('Gets the bill endpoint with an error', async done => {
  // Sends GET Request to /test endpoint
  const response = await request.post('/bill').send({})
  expect(response.status).toBe(400)
  expect(response.body.error).toBe('Bad request')
  done()
})
