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

            <ul style={{listStyle: 'none', textAlign: 'center'}}>
                <li>
                    Airline: {props.flights.airline}
                </li>
                <li>
                    Flight Number: {props.flights.flightNo}
                </li>
                
            </ul>

        <h3 style={{textAlign: 'center'}}>arrival time below</h3>
        
        {/* <form action={`flight/${props.flight._id/destinations}`} method="post"> */}
        <form>
        <h3>Add a Destination:</h3>
        <select name="airport" value={props.airport}>
                <br />
                    <option>AUS</option>
                    <option>DAL</option>
                    <option>LAX</option>
                    <option>SAN</option>
                    <option>SEA</option>
                    </select>
                    <br />
                    <button>Add</button>
        </form>





            {/* DESTINATION ARRAY AND ARRIVAL TIME */}
        </body>

        <br />
        {/* <form action ="/flight" method="POST" > */}
        <form action={`/flight/${props.flights._id}?_method="DELETE"`} method="POST"><button>Delete</button></form> {""}
        <br />
        <button type="submit">Submit</button>
        </div>
    );
}


module.exports = Show;