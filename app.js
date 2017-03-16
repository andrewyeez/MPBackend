var express = require('express')
var mongoose = require('mongoose')
var app = express()

// This is an example of calling the controller file to handle the routing
var users = require('./app/users/router')
app.use('/users', users)


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
mongoose.connect('mongodb://192.168.99.100:27017/mpbackend')
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('We are connected!')
});
