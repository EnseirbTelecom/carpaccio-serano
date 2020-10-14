const {Repository} = require("../src/Repository");
const express = require('express');
const router = express.Router();

/* GET id. */
router.get('/id', function(req, res, next) {
  return {
    id : Repository.getInstance().id
  }
});

module.exports = router;
