const express = require('express')
const router = express.Router()

const Restaurants = require('../../models/restaurant')

// CRUD create
router.get('/delete/:id', (req, res) => {
  const id = req.params.id
  return Restaurants.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router
