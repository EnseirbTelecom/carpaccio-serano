/* eslint-env jest */

const Bill = require('../../src/DataClasses/Bill.js')

test('{"prices" : [10, 20], "quantities" : [1, 2]} total returns {"error" : "error in request"}.', () => {
  const bill = { prices: [10, 20], quantities: [1, 2] }
  const tmpBill = new Bill(bill)
  expect(() => tmpBill.getBillTotal()).toThrowError(
    new Error('error in request')
  )
})

test('{"prices" : [], "quantities" : []} total returns {"error" : "error in request"}.', () => {
  const bill = { prices: [], quantities: [] }
  const tmpBill = new Bill(bill)
  expect(() => tmpBill.getBillTotal()).toThrowError(
    new Error('error in request')
  )
})

test('{"prices" : [-10, 20], "quantities" : [1, 2]} total returns {"error" : "error in request"}.', () => {
  const bill = { prices: [-10, 20], quantities: [1, 2] }
  const tmpBill = new Bill(bill)
  expect(() => tmpBill.getBillTotal()).toThrowError(
    new Error('error in request')
  )
})

test('{"prices" : [10, 20], "quantities" : [-1, 2]} total returns {"error" : "error in request"}.', () => {
  const bill = { prices: [10, 20], quantities: [-1, 2] }
  const tmpBill = new Bill(bill)
  expect(() => tmpBill.getBillTotal()).toThrowError(
    new Error('error in request')
  )
})

test('{"prices" : [10, 20, 30], "quantities" : [1, 2]} total returns {"error" : "error in request"}.', () => {
  const bill = { prices: [10, 20, 30], quantities: [1, 2] }
  const tmpBill = new Bill(bill)
  expect(() => tmpBill.getBillTotal()).toThrowError(
    new Error('error in request')
  )
})

test('{"prices" : [10, 20], "quantities" : [1, 2, 3]} total returns {"error" : "error in request"}.', () => {
  const bill = { prices: [10, 20], quantities: [1, 2, 3] }
  const tmpBill = new Bill(bill)
  expect(() => tmpBill.getBillTotal()).toThrowError(
    new Error('error in request')
  )
})

test('{"quantities" : [1, 2]} total returns {"error" : "error in request"}.', () => {
  const bill = { quantities: [1, 2] }
  const tmpBill = new Bill(bill)
  expect(() => tmpBill.getBillTotal()).toThrowError(
    new Error('error in request')
  )
})

test('{"prices" : [10,20]} total returns {"error" : "error in request"}.', () => {
  const bill = { prices: [10, 20] }
  const tmpBill = new Bill(bill)
  expect(() => tmpBill.getBillTotal()).toThrowError(
    new Error('error in request')
  )
})

test('{} total returns {"error" : "error in request"}.', () => {
  const bill = {}
  const tmpBill = new Bill(bill)
  expect(() => tmpBill.getBillTotal()).toThrowError(
    new Error('error in request')
  )
})

test('{"prices" : [10, 20], "quantities" : [1, 2], "country" : "FR"} total returns {"total" : 60}.', () => {
  const bill = { prices: [10, 20], quantities: [1, 2], country: 'FR' }
  const tmpBill = new Bill(bill)
  expect(tmpBill.getBillTotal()).toStrictEqual({ total: 60 })
})

test('{"prices" : [15.99, 11.99], "quantities" : [1, 2], "country" : "ES"} total returns {"total" : 47,56}.', () => {
  const bill = { prices: [15.99, 11.99], quantities: [1, 2], country: 'ES' }
  const tmpBill = new Bill(bill)
  expect(tmpBill.getBillTotal()).toStrictEqual({ total: 47.56 })
})

test('{"prices" : [15.99, 11.99], "quantities" : [1, 2], "country" : "ZZ"} total returns {"error" : "error in request"}.', () => {
  const bill = { prices: [15.99, 11.99], quantities: [1, 2], country: 'ZZ' }
  const tmpBill = new Bill(bill)
  expect(() => tmpBill.getBillTotal()).toThrowError(
    new Error('error in request')
  )
})
