'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Buy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Buy.init({
    id: {
      primaryKey:true,
      type : DataTypes.INTEGER,
    },
    productId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Buy',
  });
  return Buy;
};