const jwt = require("jsonwebtoken");
const { User } = require('../models/index');
// 모델 가져오기

// 쿠키에 담아 보내줬던 토큰이 일치하는지 검증하고,
// 있다면(로그인 성공이 된 상태) 미들웨어 next() 로 넘김

module.exports = async (req, res, next) => {
  const { cookie } = req.headers;

  // 쿠키 없을때 예외
  if(!cookie) {
    return res.status(401).json({ msg: "로그인 후 이용하세요"})
  }

  // authToken이 없거나, authType이 accessToken이 아닐때 예외

  const [authType, authToken] = cookie.split("=");
  if (!authToken || authType !== "accessToken") {
    res.status(401).send({
      msg: "로그인 후 이용하세요"
    })
    return;
  }
  // 토큰 검증
  try {
    const { userId } = jwt.verify(
      authToken,
      "my-secret-key"
    );
    
  // primary key를 이용한 검색
    User.findByPk(userId).then(
      (User) => {
      // locals에 저장
      res.locals.user = User;
      next();
      });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ msg: "로그인후 이용하세요"})
  } 
}

