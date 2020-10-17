const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(res.json({
    HelloWord : "Hello boss World"
  }))
});

module.exports = router;
