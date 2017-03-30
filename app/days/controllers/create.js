var express = require('express')
var Day = require('../model')
var router = express.Router()

router.post('/', function (req,res) {
  Day.create(req.body, function (err) {
    if (err) return res.send(err)
    res.send({"message":"Success on Creating A Day"})
  })
})

modul.exports = router
