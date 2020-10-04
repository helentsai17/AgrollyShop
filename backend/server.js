var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const mysql = require('mysql');
var app = express()
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

var Goods = require('./routes/goods')



app.use('/goods', Goods)


app.listen(port, function () {
  console.log('Server is running on port: ' + port)
})