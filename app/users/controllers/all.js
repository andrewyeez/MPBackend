var express = require('express')
var router = express.Router()
var User = require('../schema.js')

router.get('/', function (req,res) {
  User.find({}, function(err, users) {
    if (err) return res.send(err)
    res.send(users)
  })
})

// delete everything Users
// User.remove().exec();

module.exports = router
