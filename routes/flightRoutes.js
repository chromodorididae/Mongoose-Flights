const express = require('express');

const router = express.Router();


const flightController = require('../controllers/flightController');

// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show
// router.get('/', flightController.index);

// router.get('/', flightController.index);

router.get('/', (req, res) => {
    res.render('Flight')
    // res.send('Hello World')
});

router.get('/New', (req, res) => {
    res.render('New')
})


// // Setup a "new" route for creating logs
// // router.get('/new', flightController.new)
// router.get('/new', (req, res) => {
//     res.render('New')
// })

// // Setup a "clear" route for removing all data from logs collection
// router.delete('/clear', flightController.clear)

// // Setup a "delete" route for removing a specific logs
// router.delete('/:id', flightController.delete)

// // Setup a "update" route for updating a specific logs
// router.put('/:id', flightController.update)

// // Setup a "seed" route for repopulating our database
// router.post('/seed', flightController.seed)

// // Setup a "create" route for adding logs data
// router.post('/', flightController.create)

// // Setup a "edit" route for editing a logs
// router.get('/:id/edit', flightController.edit)

// // Setup an "show" route for logs, attach it to router along with the controller logic
// router.get('/:id', flightController.show)


module.exports = router