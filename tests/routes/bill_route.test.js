/* eslint-env jest */

const app = require('../../app')
const supertest = require('supertest')
const request = supertest(app)

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

it('Gets the bill endpoint with { prices: [10, 20], quantities: [1, 2], discount: NO_DISCOUNT }', async done => {
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

it('Gets the bill endpoint with { prices: [500, 300], quantities: [1, 2], discount: PROGRESSIVE_DISCOUNT }', async done => {
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

it('Gets the bill endpoint with { prices: [500, 300], quantities: [1, 2], discount: FLAT_DISCOUNT }', async done => {
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

it('Gets the bill endpoint with { prices: [500, 300], quantities: [1, 2], discount: FIXED_DISCOUNT }', async done => {
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

it('Gets the bill endpoint with an error on the discount type', async done => {
  // Sends GET Request to /test endpoint
  const response = await request.post('/bill').send({
    prices: [500, 300],
    quantities: [1, 2],
    discount: 'dummy_one',
    country: 'FR'
  })
  expect(response.status).toBe(400)
  expect(response.body.error).toBe('error in request')
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
  expect(response.body.error).toBe('error in request')
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
  expect(response.body.error).toBe('error in request')
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
  expect(response.body.error).toBe('error in request')
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
  expect(response.body.error).toBe('error in request')
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
  expect(response.body.error).toBe('error in request')
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
  expect(response.body.error).toBe('error in request')
  done()
})

it('Gets the bill endpoint with an error', async done => {
  // Sends GET Request to /test endpoint
  const response = await request.post('/bill').send({})
  expect(response.status).toBe(400)
  expect(response.body.error).toBe('error in request')
  done()
})
