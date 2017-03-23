var express = require('express')
var User = require('../model')
var router = express.Router()


router.put('/:id', function (req,res) {
  var id = req.param("id")
  var newUsername = req.param("newUsername")
  User.findByIdAndUpdate( id , { "username" : newUsername }, function(err, post) {
    if (err) return res.send(err)
    res.send({"message":"Success on saving!"})
  })
})

module.exports = router
