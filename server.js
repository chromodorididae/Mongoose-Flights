require('dotenv').config()

const express = require('express')

// app.use(bodyParser.json());

const app = express();

// const router = express.Router();

const PORT = 3000 

const connectDB = require('./config/db')

connectDB()

const methodOverride = require('method-override')

const flightRoutes = require ('./routes/flightRoutes')

const { createEngine } = require('jsx-view-engine')

app.set('view engine', 'jsx')

app.engine('jsx', createEngine())

// app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }))

app.use(methodOverride('_method'))

//correct link to routes
app.use('/flight', flightRoutes)

app.use((req, res, next) => {
    console.log("inside middleware")
    console.log(`${req.method} ${req.path}`)
    next()
  });

// // //INDUCES
// app.get('/', (req, res) => {
//     res.render('Index')
// })


app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})