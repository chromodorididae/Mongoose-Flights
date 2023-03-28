/* list of all flights (index view) that displays each flight's airline, flight no., and departure date/time */

import React from 'react';

const Flight = require('../models/Flight');

function New (props) {
    return (
        <div>
            <div style={{fontSize:'15pt', textAlign: 'center'}}>
            <a href="/flight">Home</a>
            </div>

            <title>New View</title>
            <body style={{color: 'black', backgroundColor: 'lightgray', textAlign: 'center', padding: '50px'}}>
            <h1 style={{textAlign: 'center', }}>Book a Flight</h1>

            <ul style={{listStyle: 'none', fontSize:'25pt', textAlign:'center', marginRight: '30px'}}>
                <form action ="/flight" method="POST" >
                    <label>Airline </label>
                    <br />
                    <input type="text" name="airline" value={props.airline} onChange={props.handleInputChange} />
                    <br /><br />
                    <label>Flight Number </label><br />
                    <input type="text" name="flightNo" value={props.flightNo} onChange={props.handleInputChange} />
                    <br /><br />
                    <label>Departure Date </label><br />
                    <input type="date" name="departureDate" value={props.departureDate} onChange={props.handleInputChange} />
                    <br /><br />
                    <label>Return Date </label><br />
                    <input type="date" name="returnDate" value={props.returnDate} onChange={props.handleInputChange} />
                    <br />
                    <button type="submit">Submit</button>

                    
                </form>

                    

            </ul>

            </body>
            
        </div>
    );
}


module.exports = New;