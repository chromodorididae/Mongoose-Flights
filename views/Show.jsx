/* list of all flights (index view) that displays each flight's airline, flight no., and departure date/time */

import React from 'react';

function Show (props) {
    return (
        <div>
            <title>Show View</title>
            <body style={{color: 'black', backgroundColor: 'lightgray', textAlign: 'center', padding: '50px'}}>
            <h1 style={{textAlign: 'center', }}>Show View</h1>

            {/* <ul style={{listStyle: 'none', fontSize:'25pt', textAlign:'center', marginRight: '30px'}}>
                <form>
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
            </ul> */}

            </body>
            <div style={{fontSize:'15pt', textAlign: 'center'}}>
            <a href="/">Back</a>
            </div>
        </div>
    );
}


module.exports = Show;