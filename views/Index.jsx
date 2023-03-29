import React from 'react';


function Index (props) {
    console.log('index working')


    return (
        <div>
            <div style={{textSize: '20pt', textAlign: 'center'}}>
            <a href="/flight/new">Book a Flight</a></div>

            <body style={{color:'black', backgroundColor: 'lightgray', padding: '30px'}}>
                <title>Index View</title>
            <h1 style={{textAlign: 'center'}}>List of All Flights</h1>

            <ul style={{listStyle: 'none', paddingLeft:'0px', fontSize: '25px'}}>
                    {props.flights.map((flights, index) => 
                        <li key={index}>
                            <strong>{flights.airline}
                            <br />
                            {flights.flightNo}</strong>
                            <br />
                            {flights.departs.toString()}
                            <br />
                            <a href={`/flight/${flights._id}`}>Details</a>
                            <br /><br />
                            
                            

                            {/* ADD DEPARTS AND ARRIVAL */}
                            {/* {flights.departs}
                            {flights.arrival} */}
                            {/* departureDate, returnDate */}
                        </li>
                    )}
                </ul>
            

                
            </body>
            
            
            
        </div>
    );
}

module.exports = Index;