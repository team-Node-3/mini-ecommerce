const { Products } = require('../models');
const { sequelize } = require("../models");

class ListRepository {
  constructor(ProductsList) {
    this.ProductsList = ProductsList;
  }
  findList = async () => {
    const List = await Products.findAll();

    return List;
  };

  
}

module.exports = ListRepository;