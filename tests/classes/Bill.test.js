/* eslint-env jest */

const Bill = require('../../src/DataClasses/Bill.js')

test('{ "prices" : [10, 20], "quantities" : [1, 2] } total returns {"total" : 50}.', () => {
    let bill = { "prices" : [10, 20], "quantities": [1,2] }
    let tmp_bill = new Bill(bill)
    expect(tmp_bill.getBillTotal()).toStrictEqual({"total" : 50})
})