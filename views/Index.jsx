import React from 'react';


function Index (props) {


    return (
        <div>
            <div style={{textSize: '20pt', textAlign: 'center'}}>
            <a href="/flight/new">Book a Flight</a></div>

            <body style={{color:'black', backgroundColor: 'lightgray', padding: '50px'}}>
                <title>Index View</title>
            <h1 style={{textAlign: 'center'}}>List of All Flights</h1>

            <ul style={{listStyle: 'none', paddingLeft:'0px', fontSize: '25px'}}>
                    {props.flights.map((flights, index) => 
                        <li key={index}>
                            <a href={`/flight/${flights._id}`}><strong>{flights.airline}
                            <br />
                            {flights.flightNo}</strong></a>
                        </li>
                    )}
                </ul>
            


            </body>
            
            
            
        </div>
    );
}

module.exports = Index;