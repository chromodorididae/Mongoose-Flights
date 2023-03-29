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
            <body style={{color: 'black', backgroundColor: 'lightgray', textAlign: 'center', padding: '30px'}}>
            <h1 style={{textAlign: 'center', }}>Book a Flight</h1>

            <ul style={{listStyle: 'none', fontSize:'20pt', textAlign:'center', marginRight: '30px'}}>
                <form action ="/flight" method="POST" >
                    <label>Airline </label>
                    <br />
                    <select name="airline">
                    <option>American</option>
                    <option>Southwest</option>
                    <option>United</option>
                    </select>
                    {/* <input type="text" name="airline" value={props.airline} onChange={props.handleInputChange} /> */}<br /><br />
                    <label>Airport: </label>
                    <br />

                    <select name="airport" value={props.airport}>
                    <option>AUS</option>
                    <option>DAL</option>
                    <option>LAX</option>
                    <option>SAN</option>
                    <option>SEA</option>
                    </select>


                    <br /><br />
                    <label>Flight Number </label><br />
                    {/* <input type="text" name="flightNo" value={props.flightNo} onChange={props.handleInputChange} /> */}

                    <select name="flightNo" value={props.flightNo}>
                    <option>205</option>
                    <option>206</option>
                    <option>207</option>
                    <option>208</option>
                    <option>209</option>
                    </select>
                    <br /><br />
                    <label>Departure Date </label><br />
                    <input type="date" name="departureDate" value={props.departureDate} onChange={props.handleInputChange} />
                    <br /><br />
                    {/* <label>Return Date </label><br /> */}
                    {/* <input type="date" name="returnDate" value={props.returnDate} onChange={props.handleInputChange} /> */}
                    <br />
                    <button type="submit">Submit</button>

                    
                </form>

            
                    

            </ul>

            </body>
            
        </div>
    );
}


module.exports = New;