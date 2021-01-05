const express = require('express')
const router = express.Router()

const home = require('./routes/home')
const crud_create = require('./routes/create')
const crud_read = require('./routes/read')
const crud_update = require('./routes/update')
const crud_delete = require('./routes/delete')

router.use('/', home)
router.use('/restaurant', crud_create)
router.use('/restaurant', crud_read)
router.use('/restaurant', crud_update)
router.use('/restaurant', crud_delete)

module.exports = router
