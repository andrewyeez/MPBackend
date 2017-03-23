var express = require('express')
var User = require('../schema')
var router = express.Router()

router.get('/', function (req,res) {
  User.find({}, function(err, users) {
    if (err) return res.send(err)
    res.send({"message":"Success on saving!"})
  })
})

// delete everything Users
// User.remove().exec();

module.exports = router
