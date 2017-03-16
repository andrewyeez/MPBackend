var express = require('express')
var router = express.Router()

// adding our controller files
var all = require('./controllers/all')
var create = require('./controllers/create')
var update = require('./controllers/update')
var find_by_id = require('./controllers/find_by_id')

router.use('/', all)
router.use('/', create)
router.use('/', all)
router.use('/', find_by_id)

module.exports = router
