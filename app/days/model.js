/**
 *
 * Relationship
 *
 * A Day belongs to a User
 * A Day has many Meals (array of meal ids)
 *
 */
var mongoose = require('mongoose')

// define what a DAY is
var daySchema = new mongoose.Schema({
  _id: { type: Number, required: true},
  date: { type: Date, required: false, unique: false },
  morning: { type: String, required: false, unique: false },
  snack1: { type: String, required: false, unique: false },
  lunch: { type: String, required: false, unique: false },
  snack2: { type: String, required: false, unique: false },
  dinner: { type: String, required: false, unique: false },
  creator: { type: Number, required: false, unique: false }
},
{
  timestamps: true
})

var Day = mongoose.model('Day', daySchema)

// export our USER so it can be used in our Node application
module.exports = Day
