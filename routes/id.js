const express = require('express');
const router = express.Router();
const Repository = require("../src/ServiceClasses/Repository");

/* GET id. */
router.get('/', function(req, res) {
  res.send(res.json({
    id : Repository.getInstance().id,
  }))
});

module.exports = router;
