var express = require('express')
var User = require('../model')
var router = express.Router()

router.post('/', function (req,res) {
  User.create( req.body, function (err) {
    if (err) return res.send(err)
    res.send({"message":"Success on saving!"})
  })
})

module.exports = router
