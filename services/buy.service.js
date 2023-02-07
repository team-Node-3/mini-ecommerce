
const BuyRepository = require('../repositories/buy.repository')
const ProductRepository = require('../repositories/products.Repositories')
const AuthRepository = require('../repositories/auth.repository')



class BuyService {
    BuyRepository = new BuyRepository();
    ProductRepository = new ProductRepository();
    AuthRepository = new AuthRepository();
    listOrder = async (userId) => {
        const orderList = await this.BuyRepository.listOrders(userId)

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
            let orderedUser = await this.BuyRepository.findById(orderList[i].userId)

            let sortedOrder = {
                
                image:orderedProduct.image,
                name: orderedProduct.name,
                desc: orderedProduct.desc,
                stock: orderedProduct.stock,
                price: orderedProduct.price,
                address:orderedUser.address,
                orderId:orderList[i].orderId,

            }

            sortedOrdersArray.push(sortedOrder)
        }

        return sortedOrdersArray
        }

}

module.exports = BuyService;