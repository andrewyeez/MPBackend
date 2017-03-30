var express = require('express')
var router = express.Router()

var create = require('./controllers/create')
var update = require('./controllers/update')
var days_by_user = require('./controllers/days_by_user')
var day_by_user = require('./controllers/day_by_user')

router.use('/', create)
router.use('/', update)
router.use('/', days_by_user)
router.use('/', day_by_user)

module.exports = router
