var express = require('express')
var router = express.Router()
var User = require('../model.js')

router.get('/:id', function (req,res) {
  var id = req.param("id")
  User.findById(id, function (err, user) {
    if (err) return handleError(err)
    res.send(user)
  })
})

module.exports = router
