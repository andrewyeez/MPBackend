var mongoose = require('mongoose')
var autoIncrement = require('mongoose-auto-increment')

// Connect to MongoDB and create/use database called todoAppTest
var con = mongoose.connect('mongodb://192.168.99.100:27017/mpbackend');
autoIncrement.initialize(con);

// define what a USER is
var userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
},
{
  timestamps: true
})

// Auto Increment _id starting at 1
userSchema.plugin(autoIncrement.plugin, {
  model: 'User',
  startAt: 1
})

var User = mongoose.model('User', userSchema)

// export our USER so it can be used in our Node application
module.exports = User
