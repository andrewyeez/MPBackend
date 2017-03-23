var express = require('express')
var router = express.Router()
var User = require('../schema.js')

router.post('/', function (req,res) {
  console.log(req.body)
  var user = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  })
  user.save( function (err) {
    if (err) return res.send(err)
  })
})

module.exports = router
