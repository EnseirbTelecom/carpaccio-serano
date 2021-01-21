const express = require('express')
const router = express.Router()

/* GET test page. */
router.get('/', function (req, res, next) {
  res.send({
    message: 'pass!'
  })
})

module.exports = router
