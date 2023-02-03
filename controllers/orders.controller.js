const OrderService = require("../services/orders.service");

class OrderController {
    orderService = new OrderService();


    /**
     * 장바구니 목록 조회하기 
     * (한다고 했는데 맞는지 어쩐지 모르겠음)
     */
    findOrders = async (req, res, next) => {
        const { userId } = res.locals.user;

        const findOrder = await this.orderService.findAllOrder(userId);

        res.status(200).json({ data: findOrder });
    }


    /**
     * 장바구니에 상품 담기 및 개수 수정하기 
     * (한다고 했는데 맞는지 어쩐지 모르겠음)
     */
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


    /**
     * 장바구니 항목 삭제하기 
     * (한다고 했는데 맞는지 어쩐지 모르겠음)
     */
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