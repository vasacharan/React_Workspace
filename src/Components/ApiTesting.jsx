import axios from 'axios'
import React from 'react'

export const ApiTesting = () => {
const url = 'http://dataservice.accuweather.com/locations/v1/cities/search';
axios.get(url)
.then(responce => {
    console.log(responce)
})

  return (
    <div><h2>API testing</h2>
    
    
    
    
    
    </div>
  )
}
