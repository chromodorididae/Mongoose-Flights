const express = require('express');

const router = express.Router();

//rename
const flightController = require('../controllers/flightController');


// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show
// router.get('/', flightController.index);
// INDEX ROUTE
router.get('/', flightController.index);
// NEW ROUTE (CREATE/BOOK FLIGHT)
router.get('/new', flightController.new);
// DELETE
router.delete('/:id', flightController.delete)
// UPDATE
router.put('/:id', flightController.update)
// SAVE FLIGHT DATA
router.post('/', flightController.create);

router.get('/:id', flightController.show); 

//EDIT
router.get('/:id/edit', flightController.edit)
// SHOW FLIGHT DETAILS

//ADD DESTINATION ROUTE:
// router.post('/:id'/destinations', flightController.createDestinations)



//new route to create destination on show page

// router.get('/', (req, res) => {
//     res.render('Flight')
//     // res.send('Hello World')
// });

// router.get('/New', (req, res) => {
//     res.render('New')
// }) // Flight and New original routes 27032023


// // Setup a "new" route for creating logs
// // router.get('/new', flightController.new)
// router.get('/new', (req, res) => {
//     res.render('New')
// })

// // Setup a "clear" route for removing all data from logs collection
// router.delete('/clear', flightController.clear)

// // // Setup a "delete" route for removing a specific logs


// // // Setup a "update" route for updating a specific logs

// // // Setup a "seed" route for repopulating our database
// // router.post('/seed', flightController.seed)

// // // Setup a "create" route for adding logs data
// router.post('/', flightController.create)

// // // Setup a "edit" route for editing a logs

// // // Setup an "show" route for logs, attach it to router along with the controller logic
// router.get('/:id', flightController.show)


module.exports = router