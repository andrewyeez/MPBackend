var express = require('express')
var router = express.Router()
var User = require('../model.js')

router.get('/', function (req,res) {
  User.find({}, function(err, users) {
    res.send(users);
  });
})

// delete everything Users
// User.remove().exec();

module.exports = router
