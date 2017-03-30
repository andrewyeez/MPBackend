var express = require('express')
var router = express.Router()

var create = require('./controllers/create')
var update = require('./controllers/update')
var find_by_id = require('./controllers/find_by_id')
var find_by_user = require('./controllers/find_by_user')

router.use('/', create)
router.use('/', update)
router.use('/', find_by_id)
router.use('/', find_by_user)

module.exports = router
