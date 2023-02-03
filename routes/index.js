const express = require("express");
const router = express.Router();

// **장바구니 router
const orderRouter = require("./orders.routes");

// **장바구니 middleware (만드는 것인지 아닌지 모르겠지만 흉내만 내봄) //
router.use("/order", orderRouter);

module.exports = router;