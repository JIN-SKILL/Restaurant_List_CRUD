const express = require('express')
const router = express.Router()

const Restaurants = require('../../models/restaurant')

router.get('/edit/:id', (req, res) => {
  const id = req.params.id
  return Restaurants.findById(id)
    .lean()
    .then(restaurant => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})

router.post('/edit/:id', (req, res) => {
  const id = req.params.id
  const { name, name_en, category, rating, area, location, google_map, phone, description, image } = req.body
  return Restaurants.findById(id)
    .then(restaurant => {
      restaurant.name = name
      restaurant.name_en = name_en
      restaurant.category = category
      restaurant.rating = rating
      restaurant.area = area
      restaurant.location = location
      restaurant.google_map = google_map
      restaurant.phone = phone
      restaurant.description = description
      restaurant.image = image
      return restaurant.save()
    })
    .then(() => res.redirect(`/restaurant/${id}`))
    .catch(error => console.log(error))
})

module.exports = router
