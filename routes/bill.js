const Bill = require('../src/DataClasses/Bill')
const express = require('express')
const router = express.Router()

/* GET bill page. */
router.post('/', function (req, res, next) {
  try {
    const bill = new Bill(req.body)
    bill
      .processTotal()
      .then(() => {
        const totalBill = bill.getBillTotal()
        res.send(totalBill)
      })
      .catch(error => {
        console.log(error)
      })
  } catch (e) {
    res.status(400).send({
      error: e.message
    })
  }
})

module.exports = router
