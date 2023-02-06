const express = require('express')
const dotenv = require('dotenv')

const app = express();
dotenv.config();

const authRouter = require('./routes/auth.routes')
const mypageRouter = require('./routes/mypage.routes');
const adminRouter = require("./routes/admin.Router.js")

app.use(express.static("static"));
app.set('view engine', "ejs")
app.set("views", "./static/views")


// const cookieParser = require('cookie-parser')
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/auth', authRouter);
app.use('/mypage', mypageRouter);
app.use('/admin', adminRouter);

app.get('/Mypagee', (req, res) => {
  res.render('mypage')
})

app.listen(process.env.port, async () => {
  console.log('server started!')
})

module.exports = app;
