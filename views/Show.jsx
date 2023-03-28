/* 1. show details/props of specific flight 
2. add a destination to the flight, including its arrival date/time and one of the established airport codes
3. MAP : show list of this flight's destinations (airport and arrival) 
*/

/*
let destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
    },
    arrival: Date
})
*/

// departureDate, arrivalDate = values stored in New

import React from 'react';

// const Flight = require('../models/Flight');
// const Destination = require('../models/Destination');

function Show (props) {
    return (
        <div>
            <title>Show View</title>
            <a href="/flight">Back to Flights</a>
            <body style={{color: 'black', backgroundColor: 'lightgray', textAlign: 'center', padding: '30px'}}>
            <h1 style={{textAlign: 'center', }}>Show View</h1>

            <ul>
                <li>
                    Airline: {props.flights.airline}
                </li>
                <li>
                    Flight Number: {props.flights.flightNo}
                </li>
                <li>
                    Departure: {props.flights.departs.toDateString()}
                </li>
                {/* arrival is part of destinations */}
                {/* input field in show page */}
                {/* map through destinations */}
                {/* { new route and new controller - add destination - get ID for flight, push item into destinations array, mongodb method} */}
            </ul>
        </body>

        </div>
    );
}


module.exports = Show;