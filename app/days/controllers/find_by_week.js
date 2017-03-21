var express = require('express')
var router = express.Router()
var Meal = require('../schema.js')

router.get('/:week', function (req,res) {
  Meal.find({}, function(err, meals) {
    res.send(meals);
  });
})

// delete everything Users
// User.remove().exec();

module.exports = router
