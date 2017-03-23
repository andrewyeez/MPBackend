var express = require('express')
var Meal = require('../model')
var router = express.Router()

router.get('/', function (req,res) {
  Meal.find({}, function(err, meals) {
    if (err) return res.send(err)
    res.send({"message":"Success on saving!"})
  })
})

module.exports = router
