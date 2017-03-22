var express = require('express')
var router = express.Router()
var Meal = require('../model.js')

router.get('/:id', function (req,res) {
  var id = req.param("id")
  Meal.findById(id, function (err, meals) {
    if (err) return handleError(err)
    res.send(meals)
  })
})

module.exports = router
