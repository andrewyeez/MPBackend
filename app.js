var express = require('express')
var app = express()

// This is an example of calling the controller file to handle the routing
var users = require('./controllers/users_controller.js');
users.controller(app);

// This is an example of letting the app.js handle the routing
app.get('/', function (req, res) {
  res.send('This!')
})

// This is defining what port to listen to
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
