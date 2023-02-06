const MypageRepository = require('../repositories/mypage_repository');

class MypageService {
  mypageRepository = new MypageRepository();

  showMypage = async ( currentUser ) => {
    const user = await this.mypageRepository.showMypage( currentUser );
    return user;
  };

  updateMypage = async ( nickname,fieldsToBeUpdated ) => {
    const modifyUser = await this.mypageRepository.updateMypage( nickname, fieldsToBeUpdated );
    return modifyUser;
  };

  deleteMypage = async( nickname ) => {
    const deleteUser = await this.mypageRepository.deleteMypage( nickname );
    return deleteUser;
  }

}


module.exports = MypageService;