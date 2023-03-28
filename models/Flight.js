const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
    },
    arrival: Date
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    flightNo: {
        type: Number,
        // required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function () {
            let date = new Date();
            let day = date.getDate();
            let month = date.getMonth();
            let year = date.getFullYear();
            let result = new Date(year + 1, month, day);
            // year + 1?
            return result;
        },
        airport: {
            type: String,
            enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
            default: 'SAN'
        },
        destinations: [destinationSchema]
        //destination: [destinationSchema]
    },
    // {timestamps: true}
    
})

//store the schema in a variable
const Flight = mongoose.model('Flight', flightSchema);
const Destination = mongoose.model('Destination', destinationSchema);

// module.exports = mongoose.model('Flight', flightSchema);
// module.exports = mongoose.model('Destination', destinationSchema);

// module.exports.flightSchema = flightSchema;
// module.exports.destinationSchema = destinationSchema;

//missing export?
//Route.get() requires a callback function but got a [object Undefined]

// => create our model using our fruitSchema and give our collection a name of "fruits"
// const Fruit = mongoose.model('fruits', fruitSchema)

// exporting the Fruit model as a module
// module.exports = Fruit
module.exports = { Flight, Destination }