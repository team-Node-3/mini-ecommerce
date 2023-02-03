const OrderRepository = require("../repositories/orders.repository");

class OrderService {
    orderRepository = new OrderRepository();

    /**
     * 장바구니 목록 조회하기 
     * (미완성, 어떻게 만드는지 잘 모르겠음)
     */
    findAllOrder = async (userId) => {
        const findOrder = await this.orderRepository.findAllOrder(userId);

        return findOrder.map((userId) => {
            return {
                orderId: findOrder.orderId,
                userId: findOrder.userId,
                productId: findOrder.productId,
                quantity: findOrder.quantity
            };
        });

        /**
         * 장바구니 목록 조회하기에서 손봐야할 것들
         * (이용우 튜터분 자료 내용들) 
         */
        const productIds = cart.map((c) => c.productId);

        const productKeyById = await Product.findAll({
            where: {
            productId: productIds,
            },
        }).then((product) =>
            product.reduce(
            (prev, g) => ({
                ...prev,
                [g.productId]: g,
            }),
            {}
            )
        );
        
        res.send({
            order: order.map((c) => ({
            quantity: c.quantity,
            product: productKeyById[c.productId],
            })),
        });
    }


    /**
     * 장바구니에 상품 담기 및 개수 수정하기 
     * (미완성, 어떻게 만드는지 아예 모르겠음)
     */
    modifyOrder = async (productId) => {
        const { productId } = req.params;
        const { quantity } = req.body;

        const findOrder = await this.orderRepository.findAllOrder(productId);
      
        if (quantity < 1) {
          res.status(400).json({ errorMessage: "수량은 1 이상이어야 합니다." });
          return;
        }

        return {
            orderId: findOrder.orderId,
            userId: findOrder.userId,
            productId: findOrder.productId,
            quantity: findOrder.quantity
        };

        /**
         * 장바구니 상품 담기 및 수정에서 손봐야할 것들
         * (이용우 튜터분 자료 내용들) 
         */
        const existsOrder = await Order.findOne({
            where: {
              userId,
              productId: Number(productId),
            },
        });
        
        if (existsOrder) {
            existsOrder.quantity = quantity;
            await existsOrder.save();
        } else {
            await Order.create({
              userId,
              productId: Number(productId),
              quantity,
            });
        }

        res.send({});
    }


    /**
     * 장바구니 항목 삭제하기 
     * (한다고 했는데 맞는지 어쩐지 모르겠음)
     */
    deleteOrder = async (orderId, userId) => {
        const findOrder = await this.orderRepository.deleteOrder(orderId, userId);
        if (!findOrder) throw new Error("주문이 존재하지 않습니다.");

        await this.orderRepository.deleteOrder(orderId, userId);

        return {
            orderId: findOrder.orderId,
            userId: findOrder.userId,
            productId: findOrder.productId,
            quantity: findOrder.quantity
        };

        /**
         * 장바구니 항목 삭제에서 손봐야할 것들
         * (이용우 튜터분 자료 내용들) 
         */
        const existsOrder = await Order.findOne({
            where: {
              userId,
              productId: Number(productId),
            },
          });
        
          if (existsOrder) {
            await existsOrder.destroy();
          }

          res.send({});
    }
}

module.exports = OrderService;