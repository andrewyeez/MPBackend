var express = require('express')
var User = require('../model')
var router = express.Router()

router.get('/', function (req,res) {
  User.find({}, function(err, users) {
    if (err) return res.send(err)
    res.send({"message":"Success on saving!"})
  })
})

module.exports = router
