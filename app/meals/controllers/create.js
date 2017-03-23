var express = require('express')
var Meal = require('../model')
var router = express.Router()

router.post('/', function (req,res) {
  Meal.create(req.body, function (err, newMeal) {
    if (err) return res.send(err)
    res.send({"message":"Success on saving!"})
  })
})

module.exports = router
