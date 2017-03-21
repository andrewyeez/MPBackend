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
  date: { type: Date, required: true, unique: false },
  morning: { type: String, required: false, unique: false },
  snack1: { type: String, required: false, unique: false },
  lunch: { type: String, required: false, unique: false },
  snack2: { type: String, required: false, unique: false },
  dinner: { type: String, required: false, unique: false },
  creator: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
},
{
  timestamps: true
})

var Day = mongoose.model('Day', daySchema)

// export our USER so it can be used in our Node application
module.exports = Day
