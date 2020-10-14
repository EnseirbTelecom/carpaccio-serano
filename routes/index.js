const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.json({
    HelloWord : "Hello boss World"
  })
});

module.exports = router;
