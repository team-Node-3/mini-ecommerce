const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/auth');
const ListRouter = require("./list.routes");
const BuyRouter = require("./buy.routes");

router.use('/list', [ListRouter]);
router.use('/buy', [BuyRouter]);

router.get('/', authMiddleware, (req, res) => {
  const user = res.locals.user;
  res.render('list', {user:user});
  });
router.get('/orders', authMiddleware, (req, res)=> {
  const user = res.locals.user;
  res.render('orders', {user:user});
});

module.exports = router;