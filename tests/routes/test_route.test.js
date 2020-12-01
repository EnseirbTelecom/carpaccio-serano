/* eslint-env jest */

const app = require('../../app')
const supertest = require('supertest')
const request = supertest(app)

it('Gets the test endpoint', async done => {
  // Sends GET Request to /test endpoint
  const response = await request.get('/test')
  expect(response.status).toBe(200)
  expect(response.body.message).toBe('pass!')
  done()
})
