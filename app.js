const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const authRouter = require('./routes/auth.routes')
const mypageRouter = require('./routes/mypage.routes');

// const cookieParser = require('cookie-parser')

// 라우터
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/auth', authRouter);
app.use('/mypage', mypageRouter);

// 포트
app.listen(process.env.port, async () => {
  console.log('server started!')
})

module.exports = app;
