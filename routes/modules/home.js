const express = require('express')
const router = express.Router()

const Restaurants = require('../../models/restaurantSchema')

router.get('/', (req, res) => {
  return Restaurants.find()
    .lean()
    .sort({ name: 'asc' })
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

module.exports = router
