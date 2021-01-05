// require packages used in the project
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const route = require('./controller')
const app = express()
const port = 3000

// add handlebars template and start using template
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// setting static files, body-parser, route
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(route)

// start listening Express server
app.listen(port, () => { console.log(`The server is listening on http://localhost:${port}`) })

// start connecting with database
require('./models/config/mongoose')
