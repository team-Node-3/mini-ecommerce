const express = require("express");
const router = express.Router();

const OrderController = require("../controllers/orders.controller");

const orderController = new OrderController();

// 장바구니 목록 조회하기
router.get("/product/order", orderController.findOrders);

// 장바구니에 상품 담기 및 개수 수정하기
router.put("/product/:productId/order", orderController.modifyOrder);

// 장바구니 항목 삭제하기
router.delete("/product/:productId/order", orderController.deleteOrder);

module.exports = router;