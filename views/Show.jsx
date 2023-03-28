/* 1. show details/props of specific flight 
2. add a destination to the flight, including its arrival date/time and one of the established airport codes
3. show list of this flight's destinations (airport and arrival) 
*/

import React from 'react';

function Show (props) {
    return (
        <div>
            <title>Show View</title>
            <body style={{color: 'black', backgroundColor: 'lightgray', textAlign: 'center', padding: '50px'}}>
            <h1 style={{textAlign: 'center', }}>Show View</h1>

            <ol>
                <li>Show details of specific flight</li>
                <li>
                    Add a destination to the flight, including its arrival date/time and one of the established airport codes
                </li>
                <li>
                    Show list of this flight's destinations (airport and arrival) 
                </li>
            </ol>
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