const express = require('express');
const router = express.Router();

const ListRouter = require("./list.routes");

router.use('/list', [ListRouter]);

router.get('/', function(req, res) {
    res.render('list');
  });
// router.get('/order', function(req, res) {
//   res.render('orders');
// });

module.exports = router;