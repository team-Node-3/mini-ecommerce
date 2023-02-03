const express = require('express')
const dotenv = require('dotenv')
const authRouter = require('./routes/auth.routes')
// const cookieParser = require('cookie-parser')

const db = require('./models/index.js');

const sequelize = db.sequelize;

dotenv.config()

const app = express();

// 라우터

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/auth', authRouter);

// 포트
app.listen(process.env.port, async () => {
  console.log('server started!')
})

module.exports = app;