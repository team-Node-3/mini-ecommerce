const express = require('express');
const router = express.Router();

const ListRouter = require("./list.routes");

router.use('/list', [ListRouter]);

router.get('/', function(req, res) {
    res.render('list');
  });

module.exports = router;