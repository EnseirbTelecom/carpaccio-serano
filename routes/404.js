const express = require('express')
const router = express.Router()

/* GET 404 page. */
router.get('/', function (req, res, next) {
  res.status(404).send({ error: '404 Not Found' })
})

module.exports = router
