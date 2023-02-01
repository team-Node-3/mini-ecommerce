const express = require("express");
const router = express.Router();

const OrderController = require("../controllers/orders.controller");

const orderController = new OrderController();

// 장바구니 조회하기
router.get("/order", orderController.getOrders);

// 주문하기
router.post("/order/cart", orderController.purchaseOrders);

// 주문수정
router.put("/order/:orderId/modify", orderController.modifyOrder);

// 주문삭제
router.delete("/order/:orderId/delete", orderController.deleteOrder);

module.exports = router;