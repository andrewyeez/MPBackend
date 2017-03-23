var express = require('express')
var router = express.Router()
var User = require('../model.js')

router.put('/:id', function (req,res) {
  var id = req.param("id")
  var newUsername = req.param("newUsername")
  User.findByIdAndUpdate( id , { "username" : newUsername }, function(err, post) {
    if (err) return handleError(err)
    res.send({"status": "success"})
  })
})

module.exports = router
