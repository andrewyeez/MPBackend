var express = require('express')
var bodyParser = require('body-parser')
var app = express()

// Express version 4 and above requires extra middle-ware layer to handle
// POST request. This middle-ware is called as ‘bodyParser’.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// This is an example of calling the controller file to handle the routing
var users = require('./app/users/router')
var meals = require('./app/meals/router')
var days = require('./app/days/router')
app.use('/users', users)
app.use('/meals', meals)
app.use('/days', days)

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
