/* eslint-env jest */

const app = require('../../app')
const supertest = require('supertest')
const request = supertest(app)

it('Gets the id endpoint', async done => {
  // Sends GET Request to /test endpoint
  const response = await request.get('/id')
  expect(response.status).toBe(200)
  expect(response.body).toStrictEqual({
    id: 'carpaccio-serano'
  })
  done()
})
