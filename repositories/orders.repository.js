const { Product } = require("../models");

class OrderRepository {

    /**
     * 장바구니 목록 조회하기 
     * (한다고 했는데 맞는지 어쩐지 모르겠음, 너무 썰렁한데?)
     */
    findOrders = async(userId) => {
        const findOrder = await Product.findAllOrder({where: {userId}});

        return findOrder;
    }


    /**
     * 장바구니에 상품 담기 및 개수 수정하기 
     * (미완성, 어떻게 만드는지 아예 모르겠음)
     */
    modifyOrder = async(userId, productId, quantity) => {
        const modifyOrder = await Product.modify({where: {userId, productId, quantity}});

        return modifyOrder;
    }


    /**
     * 장바구니 항목 삭제하기 
     * (이것만 맞을 것 같은데 확신은 없음)
     */
    deleteOrder = async(productId) => {
        const deleteOrder = await Product.destroy({where: {productId}});

        return deleteOrder;
    }
}

module.exports = OrderRepository;