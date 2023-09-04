import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Pagination2 } from './Pagination2';

export const Pagination1 = () => {
const [data, setData] = useState([]);
const [pages, setPages] = useState([]);

useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/posts')
.then(response =>{
    setData(response.data);
    console.log(response.data);
    setPages(response.data.slice(0,10));
})

},[]);

const pageHandler =(pageNumber)=>{
    setPages(data.slice((pageNumber*10)-10,pageNumber*10));
}

  return (
    <div>
    <center>
    <h2>Pagination - Application </h2>
        {data.length>=1?
            <div>
            {
                 pages.map((item,index)=>(
                     <div style={{border:'1px solid black', maxWidth:'50%'}}>{item.id} {item.title}</div>
                 ))
             }
         
         </div>
         :
        <p>Data not loaded</p>
        }
         
         <br /><br />
         <Pagination2 data = {data} pageHandler={pageHandler}/>
    </center>
   </div>
  )
}
