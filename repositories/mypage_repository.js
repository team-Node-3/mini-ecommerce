const { User } = require('../models');

class MypageRepository {
  showMypage = async(userId) => {
    const user = await User.findOne({
      where: { id:userId }
    })
    return user;
  };

  updateMypage = async(nickname, fieldsToBeUpdated) => {
    const modifyUser = await User.update(fieldsToBeUpdated, {
      where: { nickName:nickname }
    });
    return modifyUser;
  };

  deleteMypage = async(nickname) => {
    const deleteUser = await User.destroy({ 
      where: { nickName:nickname } 
    });
    return deleteUser;
  }

}

module.exports = MypageRepository;