const express = require('express');
const Bill = require("../src/DataClasses/Bill");
const router = express.Router();

/* GET bill page. */
router.post('/', function(req, res, next) {
  try {
    let bill = new Bill(req.body)
    res.send(res.json (bill.getTotalObject()))
  } catch (Error) {
    res.send(res.json({
      error : Error.message
    }))
  }
});

module.exports = router;
