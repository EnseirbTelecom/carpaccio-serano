/* eslint-env jest */

const app = require('../../app')
const supertest = require('supertest')
const request = supertest(app)

it('Gets the index endpoint', async done => {
  // Sends GET Request to /test endpoint
  const response = await request.get('/')
  expect(response.status).toBe(200)
  expect(response.body).toStrictEqual({
    HelloWord: 'Hello boss World'
  })
  done()
})

it('Gets the 404 Not Found endpoint', async done => {
  // Sends GET Request to /test endpoint
  const response = await request.get('/pretty')
  expect(response.status).toBe(404)
  expect(response.body.error).toBe('404 Not Found')
  done()
})

it('Gets the 404 Not Found endpoint', async done => {
  // Sends GET Request to /test endpoint
  const response = await request.get('/id/poulet')
  expect(response.status).toBe(404)
  expect(response.body.error).toBe('404 Not Found')
  done()
})
