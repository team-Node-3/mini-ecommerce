const { User } = require('../models');

class MypageRepository {
  showMypage = async(currentUser) => {
    const user = await User.findOne({
      where: { nickname:nickname }
    })
    return user;
  };

  updateMypage = async(nickname, fieldsToBeUpdated) => {
    const modifyUser = await User.update(fieldsToBeUpdated, {
      where: { nickname:nickname }
    });
    return modifyUser;
  };

  deleteMypage = async(nickname) => {
    const deleteUser = await User.destroy({ 
      where: { nickname:nickname } 
    });
    return deleteUser;
  }

}

module.exports = MypageRepository;