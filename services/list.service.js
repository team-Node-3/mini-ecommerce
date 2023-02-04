const ListRepository = require('../repositories/list.repository');
const { Products } = require('../models');

class ListService {
  listRepository = new ListRepository(Products);

  findList = async () => {
    const List = await this.listRepository.findList();

    return List.map(list => {
      return {
        productId: list.productId,
        name: list.name,
        price: list.price,
        stock: list.stock,
        desc: list.desc,
        image: list.image,
      }
    });
  }
}
module.exports = ListService;