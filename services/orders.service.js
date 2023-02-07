const OrderRepository = require('../repositories/orders.repository')
const ProductRepository = require('../repositories/products.Repositories')
const AuthRepository = require('../repositories/auth.repository')



class OrderService {
    OrderRepository = new OrderRepository();
    ProductRepository = new ProductRepository();
    AuthRepository = new AuthRepository();

    listOrder = async () => {
        const orderList = await this.OrderRepository.listOrders()

        return   orderList.map(orderList => {
            return {
              orderId: orderList.orderId,
                productId: orderList.productId,
                userId:orderList.userId,
                amount:orderList.amount,
              createdAt: orderList.createdAt,
		        updatedAt: orderList.updatedAt,
            }
          });
    }
    sortOrder = async (orderList) => {

        let sortedOrdersArray = new Array();

        
        for(let i=0; i<orderList.length; i++){
            let orderedProduct = await this.ProductRepository.findById(orderList[i].productId)
            let orderedUser = await this.OrderRepository.findById(orderList[i].userId)

            let sortedOrder = {
                
                image:orderedProduct.image,
                name: orderedProduct.name,
                orderId:orderList[i].orderId,
                price:orderedProduct.price,
                amount:orderList[i].amount,
                nickname:orderedUser.nickname,
                address:orderedUser.address

            }

            sortedOrdersArray.push(sortedOrder)
        }

        return sortedOrdersArray
        }
        
    
    

    uploadOrder = async (name, price, stock, desc, image) =>{

        const OrderData = await this.OrderRepository.createOrder(name, price, stock, desc, image)

        return {
            status : "200"
        }
        }

    editOrder = async (OrderId, name, price, stock, desc, image) =>{

        const OrderData = await this.OrderRepository.editOrder(name, price, stock, desc, image)
        return;
    }

deleteOrder = async (OrderId) =>{
    const deleteOrder = await this.OrderRepository.deleteOrder(OrderId)

    return;
}

}

module.exports = OrderService;