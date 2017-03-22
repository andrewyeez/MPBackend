var express = require('express')
var router = express.Router()
var Meal = require('../model.js')

router.post('/', function (req,res) {
  Meal.create(req.body, function (err, newMeal) {
    if (err) return handleError(err)
    res.send({"status": "success"})
  })
})

module.exports = router
