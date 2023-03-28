//Flight and Destination are both schemas
const { Flight, Destination } = require('../models/Flight');


module.exports.index = async (req, res) => {
    try {
        const flights = await Flight.find();
        res.render('Index', { flights })
    }
    catch (err) {
        console.log(err);
        res.send(err.message)
    }
} //DestinationArray.find()

//get /flights/new
module.exports.new = async (req, res) => {
    res.render('New')
}

module.exports.delete = async (req, res) => {
    try {
        await Flight.findByIdAndDelete(req.params.id);
        res.redirect('/flight')
    }
    catch (err) {
        console.log(err);
        res.send(err.message)
    }
}

module.exports.update = async (req, res) => {
    try {
        await Flight.findByIdAndUpdate(req.params.id, req.body)
        res.redirect(`/flight/${req.params.id}`)
    } catch (err) {
        console.log(err);
        res.send(err.message)
    }
}

module.exports.create = async (req, res) => {
    try {
        const flights = await Flight.create(req.body);
    } catch (err) {
        console.log(err);
        res.send(err.message)
    }
    res.redirect('/flight')
}

module.exports.edit = async (req, res) => {
    try {
        const flights = await Flight.findById(req.params.id);
        res.render('Edit', { flight })
    }
    catch (err) {
        console.log(err);
        res.send(err.message)
    }
}

module.exports.show = async (req, res) => {
    try {
        const flights = await Flight.findById(req.params.id);
        res.render('Show', { flight })
    }
    catch (err) {
        console.log(err);
        res.send(err.message)
    }
}

//seed
//departure and arrival date, new or show