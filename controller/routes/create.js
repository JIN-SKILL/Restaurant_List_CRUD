const express = require('express')
const router = express.Router()

const Restaurants = require('../../models/restaurant')

// CRUD create
router.get('/create', (req, res) => {
  return res.render('new')
})

router.post('/', (req, res) => {
  const { name, name_en, category, rating, area, location, google_map, phone, description, image } = req.body
  return Restaurants.create({
    name: name,
    name_en: name_en,
    category: category,
    rating: rating,
    area: area,
    location: location,
    google_map: google_map,
    phone: phone,
    description: description,
    image: image
  })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router
