const { Products } = require('../models');
const { Orders } = require('../models');
const { sequelize } = require("../models");

class ListRepository {
  constructor(ListModel) {
    this.listModel = ListModel;
  }
  getProductDataById = async (productId) => {
    try {
      const productData = await this.Products.findAll({
        where: { productId },
      });
      return productData;
    } catch (error) {
      error.status = 500;
      throw error;
    }
  };
  findList = async (limit, offset) => {
    const List = await Products.findAndCountAll({
      raw: true,
      offset: offset,
      limit: limit,
      order: [['updatedAt', 'ASC']],
  });

    return List;
  };
  createOrder = async (productId, userId, amount) => {
    const order = await Orders.create({
      productId, userId, amount,
      attributes: [
        'orderId',
        'productId',
        'userId',
        'amount'
      ],
    });
    //  const price = await this.Products.price;

    return order;
  };
  
}

module.exports = ListRepository;