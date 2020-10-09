var Repository = require("../src/Repository")
var express = require('express');
var router = express.Router();

/* GET id. */
router.get('/id', function(req, res, next) {
  return {
    id : Repository.instance.id
  }
});

module.exports = router;
