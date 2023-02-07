const BuyService = require('../services/buy.service');

class BuyController {
  BuyService= new BuyService();

  listOrder = async (req, res) =>
  {
      const  userId = res.locals.user.id;
     
      const orderList = await this.BuyService.listOrder(userId)
      const sortedOrdersArray = await this.BuyService.sortOrder(orderList)
      return res.status(200).json({ data: sortedOrdersArray});
  }

}

module.exports = BuyController;