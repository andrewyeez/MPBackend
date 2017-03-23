var express = require('express')
var router = express.Router()
var User = require('../model.js')

router.post('/', function (req,res) {
  User.create( req.body, function (err, newUser) {
    console.log("ERROR!")
    if (err) {
      console.log(err)
      res.send({message: 'Failed!'})
    } else {
      res.send({message: 'New User Created!'})
    }
  })

})

module.exports = router
