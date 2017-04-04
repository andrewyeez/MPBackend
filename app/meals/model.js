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
 var autoIncrement = require('mongoose-auto-increment')

var mealSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: false },
  carbohydrate: { type: Number, required: true, unique: false },
  protein: { type: Number, required: true, unique: false },
  fat: { type: Number, required: true, unique: false },
  calories: { type: Number, required: true, unique: false },
  rating: { type: Number, required: true, unique: false },
  serving: { type: String, required: true, unique: false },
  userID: {type: Number, required: true}
},
{
  timestamps: true
})

autoIncrement.initialize(connection)
mealSchema.plugin(autoIncrement.plugin, 'Meal')
module.exports = mongoose.model('Meal', mealSchema)
