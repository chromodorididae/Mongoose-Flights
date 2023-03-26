import React from 'react';

function Index (props) {
    return (
        <div>
            <body style={{color:'black', backgroundColor: 'lightgray', padding: '50px'}}>
                <title>Index View</title>
            <h1 style={{textAlign: 'center'}}>List of All Flights</h1>

            {/* <ul>
                {props.flight.map ((flights, index) => {
                    <li key={index}>
                        <a href={`/flights/${flights._id}`}>
                            <strong>
                            {flights.airline}
                            <br />
                            {flights.flightNo}
                            <br />
                            {flights.departs}
                            <br />
                            {flights.airport}
                            <br />
                            </strong>
                        </a>
                    </li>
                }
                )}
            </ul> */}

            <ul style={{listStyle: 'none', fontSize:'25pt', textAlign:'center', marginRight: '30px'}}>
                {/* async await function? */}
                <li>Airline</li>
                <br />
                <li>Flight Number</li>
                <br />
                <li>Departure</li>
                <br />
                <li>Airport</li>
            </ul>
           

            </body>
            
            <div style={{textSize: '20pt', textAlign: 'center'}}>
            <a href="/flights/new">Book a Flight</a></div>
            
        </div>
    );
}

module.exports = Index;