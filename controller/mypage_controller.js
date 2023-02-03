const MypageService = require('../service/mypage_service.js');

const { userUpdateValidation } = require('../validations');


class MypageController {
  mypageService = new MypageService();

  // 마이페이지 조회
  showMypage = async (req, res) => {
    const {userId} = req.body
    try {
      const user = await this.mypageService.showMypage(userId);
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  // 마이페이지 수정
  updateMypage = async (req, res) => {
    const { currentUser } = res.locals;
    const nickname = currentUser.nickname;
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
  deleteMypage = async (req, res) => {
    // try {
    //   const deleteUser = await User.destroy
    // }
  }

}


module.exports = MypageController;