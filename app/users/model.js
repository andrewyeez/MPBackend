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

var userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique:false }
},
{
  timestamps: true
})

module.exports = connection.model('User', userSchema)
