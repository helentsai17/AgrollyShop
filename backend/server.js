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

var Goods = require('./routers/Goods')
var Feedback = require('./routers/Feedbacks')
var News = require('./routers/News')



app.use('/goods', Goods)
app.use('/feedback', Feedback)
app.use('/news',News)


app.listen(port, function () {
  console.log('Server is running on port: ' + port)
})