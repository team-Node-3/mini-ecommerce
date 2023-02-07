const UserlistService = require('../services/admin-user.service');

class UserlistController {
  userlistService = new UserlistService();

  // 전체 유저 조회
  showUser = async (_, res) => {
    try{
      const user = await this.userlistService.showUser();
      res.json({user});
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  // 유저 삭제
  deleteUser = async (req, res) => {
    const { userId } = req.params;
    const currentUser = res.locals.user.admin;
    try{
      if (currentUser === 1) {
        await this.userlistService.deleteUser( userId );
        res.json({ message: '회원 삭제가 완료되었습니다.' });
      }  
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

};



module.exports = UserlistController;