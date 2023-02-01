const OrderService = require("../services/orders.service");

class OrderController {
    orderService = new OrderService();


    // 장바구니 조회하기
    getOrders = async (req, res, next) => {
        const { userId } = res.locals.user;

        const getOrder = await this.orderService.findAllOrder(userId);

        res.status(200).json({ data: getOrder });
    }


    // 주문하기
    purchaseOrder = async (req, res, next) => {
        const { userId } = res.locals.user;
        const { productId } = req.params;
        const { quantity } = req.body;

        const purchaseOrder = await this.orderService.purchaseOrder(
            userId, 
            productId,
            quantity
        );

        res.status(200).json({ data: purchaseOrder });
    }


    // 주문 수정
    modifyOrder = async (req, res, next) => {
        const { userId } = res.locals.user;
        const { productId } = req.params;
        const { quantity } = req.body;

        const modifyOrder = await this.orderService.modifyOrder(
            userId,
            productId,
            quantity
        );

        res.status(200).json({ data: modifyOrder });
    }


    // 주문 삭제
    deleteOrder = async (req, res, next) => {
        const { userId } = res.locals.user;
        const { productId } = req.params;

        const deleteOrder = await this.orderService.deleteOrder(
            userId,
            productId
        );

        res.status(200).json({ data: deleteOrder });
    }
}

module.exports = OrderController;