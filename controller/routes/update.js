const express = require('express')
const router = express.Router()

const Restaurants = require('../../models/restaurant')

// CRUD create
router.get('/create', (req, res) => {
  return res.render('new')
})

module.exports = router
