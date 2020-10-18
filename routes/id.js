const Repository = require("../src/ServiceClasses/Repository");
const express = require('express');
const router = express.Router();

/* GET id. */
router.get('/', function(req, res) {
  res.send(res.json({
    id : Repository.getInstance().id,
  }))
});

module.exports = router;
