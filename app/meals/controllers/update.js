var express = require('express')
var router = express.Router()
var Meal = require('../schema.js')

router.put('/:id', function (req,res) {
  var id = req.param("id")
  Meal.findByIdAndUpdate( id , req.body, function(err, post) {
    if (err) return handleError(err)
    res.send({"status": "success"})
  })
})

module.exports = router
