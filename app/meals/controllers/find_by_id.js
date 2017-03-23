var express = require('express')
var Meal = require('../schema')
var router = express.Router()

router.get('/:id', function (req,res) {
  Meal.findById( req.param("id") , function (err, meals) {
    if (err) return res.send(err)
    res.send({"message":"Success on saving!"})
  })
})

module.exports = router
