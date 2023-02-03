const { User } = require('../models');

class MypageRepository {
  showMypage = async(userId) => {
    // const user = await User.
    const user_db = {
      "user":"1",
      "user":"2",
      "user":"3",
      "user":"4",
    }
    const user = await user_db.findOne({
      where: {user:userId}
    })
    return user;
  };

  updateMypage = async(fieldsToBeUpdated) => {
    const modifyMypage = await User.update(fieldsToBeUpdated, {

    });
    return modifyMypage;
  }

}

module.exports = MypageRepository;