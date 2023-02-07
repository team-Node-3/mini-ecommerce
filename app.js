const express = require('express')
const dotenv = require('dotenv')

const app = express();
dotenv.config();

const router = require('./routes');
const express_render = require('./routes');

const authRouter = require('./routes/auth.routes')
const mypageRouter = require('./routes/mypage.routes');
const adminRouter = require("./routes/admin.Router.js")
const listRouter = require("./routes/list.routes.js")
const authMiddleware = require('./middleware/auth');

const cookies = require("cookie-parser");
app.use(cookies());
app.use(express.static("assets"));
app.use(express.static("static"));
app.set('view engine', "ejs")
app.set("views", "./static/views")

// 로그인 페이지 ejs 연결
app.get('/login', (req, res) => {
  res.render('login.ejs');
});

// 회원가입 페이지 ejs 연결
app.get('/signUp', (req, res) => {
  res.render('signUp.ejs');
});

// 마이 페이지
app.get('/mypage', authMiddleware, (req, res) => {
  const user = res.locals.user;
  res.render('mypage.ejs', {user:user});
});


// const cookieParser = require('cookie-parser')
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/auth', authRouter);
app.use('/mypage', mypageRouter);
app.use('/admin', adminRouter);


app.use('/api', router);
app.use('/', express_render, listRouter);


app.listen(process.env.port, async () => {
  console.log('server started!')
})

module.exports = app;
