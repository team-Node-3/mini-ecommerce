const { Orders } = require('../models');
const { where, or } = require('sequelize');
const db = require('../models')

class BuyRepository {
  listOrders = async (userId) => {
    const OrderList = await db.Orders.findAll({where:{userId}});

    return OrderList;
  };


  findById = async (userId) => {
    const user = await db.User.findOne({ 
      where: { id:userId },
    });
    return user;
  };
}
module.exports = BuyRepository;