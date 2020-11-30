/* eslint-env jest */

const Bill = require('../../src/DataClasses/Bill.js')

test('{"prices" : [10, 20], "quantities" : [1, 2]} total returns {"total" : 50}.', () => {
    let bill = { "prices" : [10, 20], "quantities": [1,2] }
    let tmp_bill = new Bill(bill)
    expect(tmp_bill.getBillTotal()).toStrictEqual({"total" : 50})
})

test('{"prices" : [], "quantities" : []} total returns {"total" : 0}.', () => {
    let bill = { "prices" : [], "quantities": [] }
    let tmp_bill = new Bill(bill)
    expect(tmp_bill.getBillTotal()).toStrictEqual({"total" : 0})
})

test('{"prices" : [-10, 20], "quantities" : [1, 2]} total returns {"error" : "error in request"}.', () => {
    let bill = { "prices" : [-10, 20], "quantities": [1,2] }
    let tmp_bill = new Bill(bill)
    expect(tmp_bill.getBillTotal()).toStrictEqual({"error" : "error in request"})
})

test('{"prices" : [10, 20], "quantities" : [-1, 2]} total returns {"error" : "error in request"}.', () => {
    let bill = { "prices" : [10, 20], "quantities": [-1,2] }
    let tmp_bill = new Bill(bill)
    expect(tmp_bill.getBillTotal()).toStrictEqual({"error" : "error in request"})
})

test('{"prices" : [10, 20, 30], "quantities" : [1, 2]} total returns {"error" : "error in request"}.', () => {
    let bill = { "prices" : [10, 20, 30], "quantities": [1,2] }
    let tmp_bill = new Bill(bill)
    expect(tmp_bill.getBillTotal()).toStrictEqual({"error" : "error in request"})
})

test('{"prices" : [10, 20], "quantities" : [1, 2, 3]} total returns {"error" : "error in request"}.', () => {
    let bill = { "prices" : [10, 20], "quantities": [1,2,3] }
    let tmp_bill = new Bill(bill)
    expect(tmp_bill.getBillTotal()).toStrictEqual({"error" : "error in request"})
})

test('{"quantities" : [1, 2]} total returns {"error" : "error in request"}.', () => {
    let bill = {"quantities": [1,2] }
    let tmp_bill = new Bill(bill)
    expect(tmp_bill.getBillTotal()).toStrictEqual({"error" : "error in request"})
})

test('{"prices" : [10,20]} total returns {"error" : "error in request"}.', () => {
    let bill = { "prices" : [10,20]}
    let tmp_bill = new Bill(bill)
    expect(tmp_bill.getBillTotal()).toStrictEqual({"error" : "error in request"})
})

test('{} total returns {"error" : "error in request"}.', () => {
    let bill = {}
    let tmp_bill = new Bill(bill)
    expect(tmp_bill.getBillTotal()).toStrictEqual({"error" : "error in request"})
})