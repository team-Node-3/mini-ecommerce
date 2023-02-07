const { where, or } = require('sequelize');
const db = require('../models')


class OrdersRepository {

    listOrders = async () => {

        const OrderList = await db.Orders.findAll();

        
        return OrderList;
    }


    deleteOrder = async (OrderId) => {
        const deleteOrder = await db.Orders.destroy({ where :{orderId:OrderId}})
        
        return;
    }




    findById = async (userId) => {
        const user = await db.User.findOne({ 
          where: { id:userId },
        });
        return user;
      }


}

module.exports = OrdersRepository;