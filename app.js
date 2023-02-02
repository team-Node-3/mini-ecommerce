const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const mypageRouter = require('./routes/mypage');

const app = express();
app.use(express.json());

app.use('/mypage', mypageRouter);


app.listen(process.env.port, async () => {
  console.log('server started!')
})

