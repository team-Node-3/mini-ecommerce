const MypageService = require('../services/mypage_service.js');

const { userUpdateValidation } = require('../validations');


class MypageController {
  mypageService = new MypageService();

  // 마이페이지 조회
  showMypage = async (_, res) => {
    // const  currentUser = res.locals.user.id;
    try {
      // const user = await this.mypageService.showMypage(currentUser);
      const user = {
        email: 'abc@naver.com',
        pw: '1234',
        nickName: 'abc',
        PhoneNumber: '010-1111-1111',
        address: '서울시 서울구 서울동'
      }
      console.log(user)
      res.json({user});
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