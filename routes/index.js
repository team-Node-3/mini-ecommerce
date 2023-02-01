const express = require("express");
const router = express.Router();

// router
const orderRouter = require("./orders.routes");

// middleware
router.use("/order", orderRouter);

module.exports = router;