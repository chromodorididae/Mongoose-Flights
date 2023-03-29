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

function Show (props) {
    console.log('show working')
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
                <li>
                    {/* Airport: {props.flights.airport} */}
                    {/* not in MongoDB - access from schema */}
                </li>
                
            </ul>

        
        
                {/* <input type="submit" value="Submit" /> */}
            <div>
                <h3 style={{textAlign: 'center'}}>arrival time below, map through destination schema within flight schema (contains airport and arrival props)</h3>
                {/* <form action={`/`}>

                </form> */}

{/* <ul style={{listStyle: 'none', paddingLeft:'0px', fontSize: '25px'}}>
                    {props.flight.destinations.map((flights, index) => 
                        <li key={index}>
                            <strong>{flights.destinations.airport}
                            <br />
                            {flights.destinations.flightNo}</strong>
                            <br />
                            {flights.destinations.arrival.toString()}
                            <br />
                            <br /><br />
                        </li>
                        
                    )}
                </ul> */}
                    
            </div>


        {/* <form action={`flight/${props.flight._id/destinations}`} method="post"> */}
        <form action={`/flight/${props.flights._id}?_method=POST`} method="post">
            <br /><br />
            <label>Add a Destination: </label>
            <br />
            <select name="airport" value={props.airport}>
                <br />
                    <option>AUS</option>
                    <option>DAL</option>
                    <option>LAX</option>
                    <option>SAN</option>
                    <option>SEA</option>
                    </select>
                    <br /><br />
                    <button>Add</button>
        </form>





        </body>

        <br />
        <form action={`/flight/${props.flights._id}?_method=DELETE`} method="POST"><button>Delete</button></form> {""}
        <br />
        <button type="submit">Submit Changes</button>
        </div>
    );
}


module.exports = Show;