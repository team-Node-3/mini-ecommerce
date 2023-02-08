const OrderService = require('../services/orders.Service');

// User의 컨트롤러(Controller)역할을 하는 클래스
class OrderController {
    OrderService = new OrderService();
    listOrder = async (req, res) =>
    {
        const orderList = await this.OrderService.listOrder()
        const sortedOrdersArray = await this.OrderService.sortOrder(orderList)
        return res.status(200).json({ data: sortedOrdersArray});
    }

    uploadOrder = async (req, res) => {
        try {
            const { name, price, stock, desc} = req.body;
            const image = req.file.path.substring(7)
            const uploadOrder = await this.OrderService.uploadOrder(
                name,
                price,
                stock,
                desc,
                image
            );
            return res.status(200).send({ message: '상품 등록 성공!' });
        } catch (err) {
            console.log(err);
            res.status(400).json({ errorMessage: '상품 등록 실패' });
        }
    };

    editOrder = async (req, res) => {
        try {
            const {OrderId, name, price, stock, desc, image } = req.body;
            const editOrder = await this.OrderService.editOrder(
                OrderId,
                name,
                price,
                stock,
                desc,
                image
            );
            return res.status(200).send({ message: '상품 수정 성공!' });
        } catch (err) {
            console.log(err);
            res.status(400).json({ errorMessage: '상품 수정 실패' });
        }
    };

    deleteOrder = async (req,res) => {
        try {
            const {orderId} =req.body
            const deleteOrder = await this.OrderService.deleteOrder(orderId)
            return res.status(200).send({ message : '상품 삭제 성공!'})
        }
        catch (err){
            console.log(err)
            res.status(400).send({errorMessage : "상품 삭제 실패"})
        }
    }


    
}

module.exports = OrderController;
