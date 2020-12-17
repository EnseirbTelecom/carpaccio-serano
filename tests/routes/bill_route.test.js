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

it('Gets the bill endpoint with an error', async done => {
  // Sends GET Request to /test endpoint
  const response = await request.post('/bill').send({})
  expect(response.status).toBe(400)
  expect(response.body.error).toBe('error in request')
  done()
})
