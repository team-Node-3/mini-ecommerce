class OrderRepository {
  constructor(Model) {
    this.Model = Model;
    }
    getAllOrders = async (userId) => {
      // 
      const order = await this.Model.findAll({
        where: { userId }
      });
      return order;
    }

    deleteOrder = async ( orderId ) => {
      const order = await this.Model.destroy({
        where : { orderId : orderId}
      })
    }
  }
