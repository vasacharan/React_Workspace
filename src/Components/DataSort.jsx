import citys from '../city.json';
import React, { useState } from 'react';

export const DataSort = () => {

    const [search, setSearch] = useState('');

    const searchHandler = (e) =>{
        setSearch(e.target.value);
        
    }

  return (
    <div>
    <center>
        <h3>Sort the city</h3><br /> <br />
        <input size={40} type='text' placeholder='Enter city Name...' value={search} onChange={searchHandler} /> 
        <input type='submit' name='submit' />
        {
            citys.filter((item) =>item.name.toLowerCase().includes(search.toLowerCase())).map((city,index) =>(
                <div key={index.id} style={{border:'1px solid black', padding:'5px', maxWidth:'50%', margin:'5px'}}>{city.name}</div>
            ))
        }
        </center>
    </div>
  )
}

