var express = require('express')
var router = express.Router()
var Day = require('../model.js')

router.get('/:day', function (req,res) {
  var id = req.param("id")
  Day.findById(id, function (err, days) {
    if (err) return handleError(err)
    res.send(days)
  })
})

module.exports = router
