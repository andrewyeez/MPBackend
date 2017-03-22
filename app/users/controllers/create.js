var express = require('express')
var router = express.Router()
var User = require('../model.js')

router.post('/', function (req,res) {
  User.create(req.body, function (err, newUser) {
    if (err) return handleError(err)
    res.send({"status": "success"})
  })
})

module.exports = router
