/* eslint-env jest */

const Repository = require('../../src/ServiceClasses/Repository.js')

test('Repository getInstance returns {"id" : "carpaccio-serano"}', () => {
  expect(Repository.getInstance()).toEqual({ id: 'carpaccio-serano' })
})

test('Git repository name is carpaccio-serano', () => {
  const tmpRepo = Repository.getInstance()
  expect(tmpRepo.id).toBe('carpaccio-serano')
})
