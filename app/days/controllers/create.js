var express = require('express')
var router = express.Router()
var Day = require('../model.js')

router.post('/', function (req,res) {
  Day.create(req.body, function (err, newDay) {
    if (err) return res.send({"fail":"true"})
    res.send({"success":"true"})
  })
})

module.exports = router
