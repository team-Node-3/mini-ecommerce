const ListRepository = require('../repositories/list.repository');
const { Products } = require('../models');

class ListService {
  listRepository = new ListRepository(Products);

  findList = async (limit, offset) => {
    const List = await this.listRepository.findList(limit, offset);

    return List
  }
  createOrder = async (productId,  amount) => {
    const order = await this.listRepository.createOrder(productId,  amount);

    return {
      productId: order.productId,
      // userId: order.userId,
      amount: order.amount,
    };
  }
}
module.exports = ListService;