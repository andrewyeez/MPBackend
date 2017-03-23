var express = require('express')
var router = express.Router()
var Meal = require('../model.js')

router.get('/:month', function (req,res) {
  Meal.find({}, function(err, meals) {
    res.send(meals);
  });
})

// delete everything Users
// User.remove().exec();

module.exports = router
