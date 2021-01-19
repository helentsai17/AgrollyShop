const express = require('express')
const { Route } = require('react-router-dom')
const router = express.Router()

const Feedback = require('../models/Feedbacks')


//create goods
router.post('/givefeedback', (req, res) => {
  if (!req.body.name) {
    res.status(400)
    res.json({
      error: 'please give your name ether nickname of a surname'
    })
  }
  if (!req.body.email) {
    res.status(400)
    res.json({
      error: 'please give us your email for us to able to contact you and impove ourself'
    })
  }

  if (!req.body.feedback_content) {
    res.status(400)
    res.json({
      error: 'please give us your feedback'
    })
  }

  if (!req.body.country) {
    res.status(400)
    res.json({
      error: 'for better server you please give us your location or the place you have troble in so we could serve your need in the location you are'
    })
  }

  const FeedbackCreate = {
    name: req.body.name,
    email: req.body.email,
    phone_number: req.body.phone_number,
    country: req.body.country,
    feedback_content:req.body.feedback_content
  }

  Feedback.create(FeedbackCreate)
    .then(feedback => {
      res.json({ status: feedback.name + "'s feedback is given" })
    })
    .catch(err => {
      res.send('feedback given failed '  + err)
    })
})

module.exports = router;