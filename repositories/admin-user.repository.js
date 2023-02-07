const { User } = require('../models');

class UserlistRepository {
  showUser = async () => {
    try {
      const user = await User.findAll({ 
        where:{ admin:0 } 
      });
      return user;
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  deleteUser = async ( userId ) => {
    console.log('실행')
    await User.destroy({ where: { id: userId }});
    return;
  };

};



module.exports = UserlistRepository;
