const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/auth');
const ListRouter = require("./list.routes");

router.use('/list', [ListRouter]);

router.get('/', authMiddleware, (req, res) => {
  const user = res.locals.user;
  res.render('list.ejs', {user:user});
  });
// router.get('/order', function(req, res) {
//   res.render('orders');
// });

module.exports = router;