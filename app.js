const express = require('express')
const dotenv = require('dotenv')


dotenv.config()

const app = express()


const productsRouter = require("./routes/products.Router.js")

app.set('view engine', "ejs")
app.set("views", "./views")

app.use(express.static("./assets"));
app.use(express.json())


app.use("/admin", productsRouter);


app.get('/', (req, res) => {
  res.send('HiHi')


})
app.listen(3000, async () => {
  console.log('server started!')
})