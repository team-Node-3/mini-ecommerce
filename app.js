const express = require('express')
const dotenv = require('dotenv')
const path = require("path");

dotenv.config()

const router = require('./routes');
const express_render = require('./routes');

const app = express()
app.set('view engine', 'ejs');
app.set('views', './templates');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('static'));

app.use(express.static(path.join(__dirname, "upload")));

app.use('/api', router);
app.use('/', express_render);
app.listen(process.env.port, async () => {
  console.log('server started!')
})