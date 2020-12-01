const Bill = require('../src/DataClasses/Bill')
const express = require('express')
const router = express.Router()

/* GET bill page. */
router.post('/', function (req, res, next) {
  try {
    const bill = new Bill(req.body)
    res.send(res.json(bill.getBillTotal()))
  } catch (Error) {
    res.send(
      res.json({
        error: Error.message
      })
    )
  }
})

module.exports = router
