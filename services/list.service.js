const ListRepository = require('../repositories/list.repository');
const { Products } = require('../models');
const { Orders } = require('../models');

class ListService {
  listRepository = new ListRepository(Products,Orders);

  findList = async (limit, offset) => {
    const List = await this.listRepository.findList(limit, offset);

    return List
  }
  createOrder = async (productId, userId, amount) => {
    const order = await this.listRepository.createOrder(productId, userId, amount);

    return {
      productId: order.productId,
      userId: order.userId,
      amount: order.amount
    };
  }
}
module.exports = ListService;