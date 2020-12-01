const Bill = require('../src/DataClasses/Bill')
const express = require('express')
const router = express.Router()

/* GET bill page. */
router.post('/', function (req, res, next) {
  try {
    const bill = new Bill(req.body)
    const billTotal = bill.getBillTotal()
    res.send(res.json(billTotal))
  } catch (Error) {
    res.status(400).send(
      res.json({
        error: Error.message
      })
    )
  }
})

module.exports = router
