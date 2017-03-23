var express = require('express')
var User = require('../schema')
var router = express.Router()

router.get('/:id', function (req,res) {
  var id = req.param("id")
  User.findById(id, function (err, user) {
    if (err) return res.send(err)
    res.send({"message":"Success on saving!"})
  })
})

module.exports = router
