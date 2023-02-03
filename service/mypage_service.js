const MypageRepository = require('../repository/mypage_repository');

class MypageService {
  mypageRepository = new MypageRepository();

  showMypage = async (userId) => {
    const user = await this.mypageRepository.showMypage(userId);
    return user;
  };

  updateMypage = async (fieldsToBeUpdated) => {
    const modifyUser = await this.mypageRepository.modifyMypage(fieldsToBeUpdated);
    return modifyUser;
  }

}


module.exports = MypageService;