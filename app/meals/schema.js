/**
 *
 * Relationship
 *
 * A Meal belongs to a User
 * A User has many Meals
 *
 */

 var mongoose = require('mongoose')
 var connection = require('../../db')

var mealSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: false },
  carbohydrate: { type: Number, required: true, unique: false },
  protein: { type: Number, required: true, unique: false },
  fat: { type: Number, required: true, unique: false },
  calories: { type: Number, required: true, unique: false },
  rating: { type: Number, required: true, unique: false },
  serving: { type: String, required: true, unique: false }
},
{
  timestamps: true
})

module.exports = mongoose.model('Meal', mealSchema)
