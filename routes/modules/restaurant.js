const express = require('express')
const router = express.Router()

const Restaurants = require('../../models/restaurantSchema')

// CRUD create
router.get('/new', (req, res) => {
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


// CRUD read
router.get('/:id', (req, res) => {
  const id = req.params.id
  return Restaurants.findById(id)
    .lean()
    .then(restaurant => res.render('detail', { restaurant }))
    .catch(error => console.log(error))
})


// CRUD update
router.get('/edit/:id', (req, res) => {
  const id = req.params.id
  return Restaurants.findById(id)
    .lean()
    .then(restaurant => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {
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

// CRUD delete
router.delete('/:id', (req, res) => {
  const id = req.params.id
  console.log()
  return Restaurants.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// search

module.exports = router
