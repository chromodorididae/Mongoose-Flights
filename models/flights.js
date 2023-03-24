/* 3 properties,
their types,
and their
validations

1. airline, String...enum to include 'American', 'Southwest', and 'United'
2. flightNo, Number...required between 10 and 9999
3. departs, Date......default value is one year from date created

THEN,
Implement the following User Stories ("As A User" == AAU):

AAU, I want to view a list of all flights (index view) that displays each flight's airline, flight no., and departure date/time
AAU, I want to create flights by entering the information on a page (new view) that has a form and submitting it

*/

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
    },
    arrival: Date
})

//include the destination schema before flightSchema

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
            let day = day.getDate();
            let month = day.getMonth();
            let year = day.getFullYear();
            let result = new Date(year + 1, month, day);
            // year + 1?
            return result;
        },
        airport: {
            type: String,
            enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
        },
        destinations: [destinationSchema]
    }
})

// let destinationSchema = new Schema({
//     airport: {
//         type: String,
//         enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
//     },
//     arrival: Date
// })

module.exports = mongoose.model('Flight', flightSchema);