const mongoose = require('mongoose')
const db = mongoose.connection

mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true , useUnifiedTopology: true })
db.on('error', () => { console.log('mongoDB error!') })
db.once('open', () => { console.log('mongoDB connected!') })

module.exports = db
