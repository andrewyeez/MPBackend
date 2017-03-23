var express = require('express')
var Meal = require('../schema')
var router = express.Router()

router.put('/:id', function (req,res) {
  Meal.findByIdAndUpdate( req.param("id") , req.body, function(err, post) {
    if (err) return res.send(err)
    res.send({"message":"Success on saving!"})
  })
})

module.exports = router
