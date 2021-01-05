const express = require('express')
const router = express.Router()

const Restaurants = require('../../models/restaurant')

// CRUD read
router.get('/:id', (req, res) => {
  const id = req.params.id
  return Restaurants.findById(id)
    .lean()
    .then(restaurant => res.render('detail', { restaurant }))
    .catch(error => console.log(error))
})

module.exports = router
