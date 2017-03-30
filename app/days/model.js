/**
 *
 *  Days
 *
 */

 var mongoose = require('mongoose')
 var connection = require('../../db')
 var autoIncrement = require('mongoose-auto-increment')

 var daySchema = new mongoose.Schema({
   date: {type: Date, required: true},
   morning: {type: Array},
   snack1: {type: Array},
   lunch: {type: Array},
   snack2: {type: Array},
   dinner: {type: Array}
 },
 {
   timestamps: true
 })

 autoIncrement.initialize(connection)
 daySchema.plugin(autoIncrement.plugin, 'Day')
 module.exports = connection.model('Day', daySchema)
