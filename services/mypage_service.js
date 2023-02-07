const MypageRepository = require('../repositories/mypage_repository');

const bcrypt = require('bcrypt');

class MypageService {
  mypageRepository = new MypageRepository();

  showMypage = async ( currentUser ) => {
    const user = await this.mypageRepository.showMypage( currentUser );
    return user;
  };

  updateMypage = async ( nickname,fieldsToBeUpdated ) => {
    const password = fieldsToBeUpdated.password;
    const hashed = await bcrypt.hash(password, 12);
    console.log(hashed)
    const email = fieldsToBeUpdated.email;
    const phone = fieldsToBeUpdated.phone;
    const address = fieldsToBeUpdated.address;

    const modifyUser = await this.mypageRepository.updateMypage( nickname, hashed, email, phone, address );
    return modifyUser;
  };

  deleteMypage = async( nickname ) => {
    const deleteUser = await this.mypageRepository.deleteMypage( nickname );
    return deleteUser;
  }

}


module.exports = MypageService;