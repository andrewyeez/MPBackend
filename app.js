var express = require('express')
var bodyParser = require('body-parser')
var autoIncrement = require('mongoose-auto-increment')
var app = express()

// Express version 4 and above requires extra middle-ware layer to handle
// POST request. This middle-ware is called as ‘bodyParser’.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// This is an example of calling the controller file to handle the routing
var users = require('./app/users/router')
var meals = require('./app/meals/router')
app.use('/users', users)
app.use('/meals', meals)


// This is an example of letting the app.js handle the routing
app.get('/', function (req, res) {
  res.send('The Thrillist !!')
})

// This is defining what port to listen to
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

// Export the app instance for unit testing via supertest
module.exports = app

// Connect to db
var mongoose = require('mongoose')
mongoose.connect('mongodb://192.168.99.100:27017/mpbackend')
var db = mongoose.connection
autoIncrement.initialize(db);
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('We are connected!')
});

// Bring in the Models
require('./app/users/model')
require('./app/meals/model')


// Plugins
// Auto Increment _id starting at 1
mongoose.model('User').schema.plugin(autoIncrement.plugin, {
  model: 'User',
  startAt: 1
})
// Auto Increment _id starting at
mongoose.model('Meal').schema.plugin(autoIncrement.plugin, {
  model: 'Meal',
  startAt: 1
})


// Connect to MongoDB and create/use database called todoAppTest
// var con = mongoose.connect('mongodb://192.168.99.100:27017/mpbackend');
// autoIncrement.initialize(con);
