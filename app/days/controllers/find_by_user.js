var express = require('express')
var Day = require('../model')
var router = express.Router()

router.get('/user/:id', function (req, res) {
  Day.where('user_id', req.param('id')).exec(function (err, days){
    if (err) return res.send(err)
    res.send(days)
  })
})

module.exports = router
