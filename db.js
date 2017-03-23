// Connect to db
var mongoose = require('mongoose')
var mongoDB = 'mongodb://192.168.99.100:27017/mpbackend'
var connection = mongoose.createConnection(mongoDB)
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('We are connected!')
});

module.exports = connection
