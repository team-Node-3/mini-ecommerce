const { where, or } = require('sequelize');
const db = require('../models')


class OrdersRepository {

    listOrders = async () => {

        const OrderList = await db.Orders.findAll();

        
        return OrderList;
    }

    createOrder = async (
        name, 
        price, 
        stock, 
        desc, 
        image
    ) => {
        const newOrder = await db.Orders.create({
            name,
            price,
            stock,
            desc,
            image
        })
        return newOrder
    }
    editOrder = async (OrderId, name, price, stock, desc, image) => {
        const editedOrder = await db.Orders.update({
            name:name,
            price:price,
            stock:stock,
            desc:desc,
            image:image
        },
        {
        where : {OrderId:OrderId}
        })
        return editedOrder
    }
    deleteOrder = async (OrderId) => {
        const deleteOrder = await db.Orders.destroy({ where :{OrderId:OrderId}})
        
        return;
    }




    findById = async (userId) => {
        const user = await db.User.findOne({ 
          where: { id:userId },
        });
        return user;
      }

      listUsers = async () => {
        const user = await db.User.findAll();
        console.log(user)
        return user;
      }

}

module.exports = OrdersRepository;