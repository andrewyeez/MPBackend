var express = require('express')
var Day = require('../model')
var router = express.Router()

router.get('/:id/', function(req,res) {
  Day.findById( req.param("id"), function (err, day) {
    if (err) return res.send(err)
    res.send(day)
  })
})

module.exports = router
