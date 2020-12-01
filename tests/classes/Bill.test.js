/* eslint-env jest */

const Bill = require('../../src/DataClasses/Bill.js')

test('{"prices" : [10, 20], "quantities" : [1, 2]} total returns {"total" : 50}.', () => {
  const bill = { prices: [10, 20], quantities: [1, 2] }
  const tmpBill = new Bill(bill)
  expect(tmpBill.getBillTotal()).toStrictEqual({ total: 50 })
})

test('{"prices" : [], "quantities" : []} total returns {"total" : 0}.', () => {
  const bill = { prices: [], quantities: [] }
  const tmpBill = new Bill(bill)
  expect(tmpBill.getBillTotal()).toStrictEqual({ total: 0 })
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
