const UserlistRepository = require('../repositories/admin-user.repository');

class UserlistService {
  userlistRepository = new UserlistRepository();

  showUser = async () => {
    const user = await this.userlistRepository.showUser();
    return user;
  };

  deleteUser = async ( userId ) => {
    const deleteUsers = await this.userlistRepository.deleteUser( userId, currentUser );
    return deleteUsers;
  }

};



module.exports = UserlistService;