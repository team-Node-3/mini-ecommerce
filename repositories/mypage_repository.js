const { User } = require('../models');

class MypageRepository {
  showMypage = async( currentUser ) => {
    const user = await User.findOne({
      where: { nickname:currentUser }
    })
    return user;
  };

  updateMypage = async(nickname, password, email, phone, address) => {
    const modifyUser = await User.update({password, email, phone, address},
      { where: { nickname:nickname } });
    return modifyUser;
  };

  deleteMypage = async(nickname) => {
    console.log(nickname)
    const deleteUser = await User.destroy({ 
      where: { nickname:nickname } 
    });
    return deleteUser;
  }

}

module.exports = MypageRepository;