const MypageService = require('../services/mypage_service.js');

const { userUpdateValidation } = require('../validations');


class MypageController {
  mypageService = new MypageService();

  // 마이페이지 조회
  showMypage = async (_, res) => {
    const currentUser = res.locals.user;
    try {
      const user = await this.mypageService.showMypage(currentUser);
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  // 마이페이지 수정
  updateMypage = async (req, res) => {
    const nickname = res.locals.user.nickname;
    const fieldsToBeUpdated = await userUpdateValidation.validateAsync(req.body);
    try {
      const modifyUser = await this.mypageService.updateMypage(
        nickname,
        fieldsToBeUpdated
      );
      res.json(modifyUser);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  // 마이페이지 삭제
  deleteMypage = async (_, res) => {
    const nickname = res.locals.user.nickname;
    try {
      const deleteUser = await this.mypageService.deleteMypage(nickname);
      res.json(deleteUser);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

}


module.exports = MypageController;