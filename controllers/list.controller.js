const ListService = require('../services/list.service');

class ListController {
  listService= new ListService();

  getList = async (req, res, next) => {
    try {
      const List = await this.listService.findList();
      res.status(200).json({ data: List });
    } catch (error) {
      res.status(444).json({ errorMessage: error.message });
    }
  };
  createOrder = async (req, res, next) => {
    try {
      const List = await this.listService.findList();
      res.status(200).json({ data: List });
    } catch (error) {
      res.status(444).json({ errorMessage: error.message });
    }
  };
}

module.exports = ListController;
