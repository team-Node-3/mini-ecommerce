const express = require("express");
const router = express.Router();

const BuyController = require("../controllers/buy.controller");
const buyController = new BuyController();
const authMiddleware = require('../middleware/auth')
router.get("/api/order", authMiddleware, buyController.listOrder);

// router.post("/api/orders", authMiddleware, buyController.createOrder);

module.exports = router;