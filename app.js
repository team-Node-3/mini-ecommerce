const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('HiHi')
})

app.listen(process.env.port, async () => {
  console.log('server started!')
})