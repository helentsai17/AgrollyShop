const express = require('express')
const { Route } = require('react-router-dom')
const router = express.Router()

const Good = require('../models/Goods')


//create goods
router.post('/create', (req, res) => {
  if (!req.body.g_name) {
    res.status(400)
    res.json({
      error: 'please give your goods a name'
    })
  }
  if (!req.body.g_type) {
    res.status(400)
    res.json({
      error: 'your goods require a type plase make sure to select one'
    })
  }
  const GoodCreate = {
    fid: req.body.fid,
    g_name: req.body.g_name,
    g_price: req.body.g_price,
    g_description: req.body.g_description,
    g_type: req.body.g_type,
    g_picture:req.body.g_picture
  }

  Good.create(GoodCreate)
    .then(good => {
      res.json({ status: good.g_name + "is created" })
    })
    .catch(err => {
      res.send('create goods error: ' + err)
    })
})

//get good by farmer id for using in farmer shop farmer shop management 

router.get('/shop/:fid', function (req, res, next) {
    Good.findAll({
      where: {
        fid: req.params.fid
      }
    }).then(goods => {
      res.json(goods)
    }).catch(error => {
        res.send('get goods error:' + error)
    })
})

//single good get, use for update item
router.get('/good/:good_id',function(req, res, next){
    Good.findOne({
        where:{
            good_id:req.params.good_id
        }
    }).then(good =>{
        res.json(good)
    }).catch(error => {
        res.send('finding one sigle good: ' +error)
    })
})

//edit and update 
router.put('/update/:good_id', function (req, res, next) {
    if (!req.body.rid) {
      res.status(400)
      res.json({
        error: ""
      })
    } else {
      Events.update({
        rid: req.body.rid,
        event_title: req.body.event_title,
        event_date: req.body.event_date,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        description: req.body.description,
        event_picture: req.body.event_picture
      },
        {
          where: {
            event_id: req.params.event_id
          }
        }
      ).then(() => {
        res.json({ status: "Event is updated" })
  
      }).error(err => handleError(err))
    }
  })






module.exports = router;