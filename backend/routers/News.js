const express = require('express')
const { Route } = require('react-router-dom')
const router = express.Router()

const News = require('../models/News')


//create goods
router.post('/newscreate', (req, res) => {
  if (!req.body.title) {
    res.status(400)
    res.json({
      error: 'the news require a title'
    })
  }
  if (!req.body.imageURL) {
    res.status(400)
    res.json({
      error: 'please give the new a image'
    })
  }

  if (!req.body.country) {
    res.status(400)
    res.json({
      error: 'the country can not be null'
    })
  }

  if (!req.body.content) {
    res.status(400)
    res.json({
      error: 'news content is required'
    })
  }

  if (!req.body.reference) {
    res.status(400)
    res.json({
      error: 'please give a reference link'
    })
  }

  const NewsCreate = {
    title: req.body.title,
    imageURL: req.body.imageURL,
    country: req.body.country,
    content: req.body.content,
    reference: req.body.reference,
    date:req.body.date
  }

  News.create(NewsCreate)
    .then(news => {
      res.json({ status: news.title + " is created" })
    })
    .catch(err => {
      res.send('news create failed: '  + err)
    })
})

module.exports = router;