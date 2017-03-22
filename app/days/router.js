const path = require('path')
var express = require('express')
var router = express.Router()

// adding our controller files
var all = require('./controllers/create')
var update = require('./controllers/update')
var find_by_day = require('./controllers/find_by_day')
var find_by_week = require('./controllers/find_by_week')
var find_by_month = require('./controllers/find_by_month')

router.use('/', all)
router.use('/', update)
router.use('/', find_by_day)
router.use('/', find_by_week)
router.use('/', find_by_month)

module.exports = router
