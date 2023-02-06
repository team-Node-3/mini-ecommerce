const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const AuthRepository = require('../repositories/auth.repository')
const { User } = require('../models/index');
// 모델 dependency injection (의존성 주입) 매우 중요!

class AuthController {
  authRepository = new AuthRepository(User)

  // 회원가입
  signup = async (req, res, next) => {
    try {
      const { email, pw, nickName, PhoneNumber, address, admin } = req.body;

      // if( email || pw || nickName || PhoneNumber || address || admin ) {
      //   return res.status(400).json({ message: "값을 모두 입력하세요"})
      // }
    

     // 닉네임 중복체크
    const foundBynickName = await this.authRepository.findBynickName(nickName);

    if(foundBynickName.length > 0) {
      return res.status(409).json({ message: `${nickName} already exists`})
    } 

    // 비밀번호 암호화(bcrypt)고 salt는 12로 설정
    const hashed = await bcrypt.hash(pw, 12);

    const createUser = await this.authRepository.createUser(
      email,
      hashed,
      nickName,
      PhoneNumber,
      address,
      admin
    );

    return res
      .status(201)
      .json({ msg: "success!"})
    }
    catch (error) {
      res.status(400).json({ errorMessage: error.message })
    }
  } 

  // 로그인
  login = async (req, res, next) => {
    try {
      const { nickName, pw } = req.body;

      // 닉네임으로 검색
      const user = await this.authRepository.findBynickName(nickName);

      // 입력 pw와 DB의 pw일치여부 판단
      const pwTest = await bcrypt.compare(pw, user[0].pw)

   // pw 불일치 혹은 user검색결과가 없을때

      if(user.length === 0 || !pwTest ){
        return res
          .status(401)
          .json({ msg: "사용자가 없거나, 비밀번호가 다름"})
      }

    //   // 토큰 생성
      const accessToken = jwt.sign(
        {
    //       // userId 와 nickName을 토큰으로 만듬
          userId: user[0].id,
          userNickname: user[0].nickName,
        },
        "my-secret-key", //비밀키
        { expiresIn: "1d"} // 유효기간 1일
      );

    // 쿠키에 토큰담아서 response

      res.cookie("accessToken", accessToken);
      // return res.status(200).json({ msg: "로그인완료"})
      return res.status(200).json({ accessToken })
    }
    catch (error) {
      console.log(error);
      return res.status(400).json({ message: "로그인 실패"})
    }
  };

   // 로그아웃(쿠키삭제)
  logout = async (req, res) => {
    res.clearCookie("accessToken");
    return res.json({ message: "logout success"})
  }
}

module.exports = AuthController;