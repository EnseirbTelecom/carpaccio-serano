const express = require('express');
const router = express.Router();
const Repository = require("../src/Repository");

/* GET id. */
router.get('/', function(req, res) {
  return res.json({
    id : Repository.getInstance().id,
  })
});

module.exports = router;
