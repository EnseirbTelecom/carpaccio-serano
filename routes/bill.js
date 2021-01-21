const Bill = require('../src/DataClasses/Bill')
const express = require('express')
const router = express.Router()

/* GET bill page. */
router.post('/', function (req, res, next) {
  const bill = new Bill(req.body)
  bill
    .processTotal()
    .then(() => {
      const totalBill = bill.getBillTotal()
      res.send(totalBill)
    })
    .catch(error => {
      res.status(400).send({
        error: error.message
      })
    })
})

module.exports = router
