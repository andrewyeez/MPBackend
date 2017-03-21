/**
 *
 * Relationship
 *
 * A Meal belongs to a User
 * A User has many Meals
 *
 */
var mongoose = require('mongoose')

// define what a USER is
var mealSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: false },
  carbohydrate: { type: Number, required: true, unique: false },
  protein: { type: Number, required: true, unique: false },
  fat: { type: Number, required: true, unique: false },
  calories: { type: Number, required: true, unique: false },
  rating: { type: Number, required: true, unique: false },
  serving: { type: String, required: true, unique: false },
  creator: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
},
{
  timestamps: true
})

var Meal = mongoose.model('Meal', mealSchema)

// export our USER so it can be used in our Node application
module.exports = Meal
