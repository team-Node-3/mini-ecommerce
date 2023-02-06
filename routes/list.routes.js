const express = require("express");
const router = express.Router();

const ListController = require("../controllers/list.controller");
const listController = new ListController();
const authMiddleware = require('../middleware/auth')
router.get("/", listController.getList);
// 미들웨어추가해야함
// router.put("/:productId", authMiddleware,listController.)
router.post("/api/orders", authMiddleware, listController.createOrder);

module.exports = router;