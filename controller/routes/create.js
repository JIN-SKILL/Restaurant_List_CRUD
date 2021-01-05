const express = require('express')
const router = express.Router()

// CRUD create
router.get('/create', (req, res) => {
  return res.render('new')
})

module.exports = router
