var express = require('express')
var Day = require('../model')
var router = express.Router()

router.put('/:id', function (req,res) {
  Day.findByIdAndUpdate(req.param('id'), req.param, function (err) {
    if (err) return res.send(err)
    res.send({"message":"Success on updating!"})
  })
})

module.exports = router
