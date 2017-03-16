var express = require('express')
var router = express.Router()

router.get('/:id', function (req,res) {
  var num = req.param("id")
  res.send('Here is the id you sent ' + num)
})

module.exports = router
