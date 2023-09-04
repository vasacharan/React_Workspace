import React, { useState } from 'react';
import '../styles/Weather.css';
import axios from 'axios';

export const Weather = () => {
    const [area,setArea] = useState(null);
    // const [dates, setDates] = useState(null);

    const areaHandle = (e) =>{
        setArea(e.target.value)
    } 
    axios.get('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London%2CUK?unitGroup=us&key=YOUR_API_KEY')
    .then(resp =>{
        console.log(resp);
    })


    
   
  return (
    <div>
    <center>
        <div className='container'>
            <h2>Weather -Application</h2>
            <input type='text' className='input-group-text w-75' placeholder='Search...' onChange={areaHandle} value={area} />
            <h1>{area}</h1>
            
        


        
        </div>
    </center>
    </div>
  )
}
