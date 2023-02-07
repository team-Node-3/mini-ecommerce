const { User } = require('../models');

class UserlistRepository {
  showUser = async () => {
    try {
      const user = await User.findAll({ 
        where:{ admin:0 } 
      });
      return user;
    } catch (err) {
      resizeBy.status(500).json({ message: err.message });
    }
  };

  deleteUser = async ( userId ) => {
    await User.destroy({ where: { userId }});
    return;
  };

};



module.exports = UserlistRepository;
