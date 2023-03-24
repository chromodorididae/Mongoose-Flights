require('dotenv').config()

// const bodyParser = require('body-parser')
//https://medium.com/@gohitvaranasi/how-to-use-body-parser-in-express-to-handle-different-post-requests-c58c29d45b46
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

app.use('/flights', flightRoutes)

// //INDUCES
app.get('/', (req, res) => {
    res.render('Index')
})

// //create route should send the data inputted to NEW form
// app.get('/create', (req, res) => {
//     // console.log(req.body)
//     // res.send(req.body)
//     res.send('received')
// })

// app.get('/show', (req, res) => {
//     res.render('Show')
// })

app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})

//1. npm init -y
//2. npm install dotenv, express, jsx-view-engine, method-override, mongoose, react, react-dom
// FIRST COMMIT - NO DEPENDENCIES INSTALLED