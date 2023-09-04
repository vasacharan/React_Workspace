import React from 'react';

export const Pagination2 = ({data, pageHandler}) => {
    let pageNumbers = [];
    for(let i=1; i < Math.ceil(data.length/10)+1; i++){
        pageNumbers.push(i);
    }
  return (
    <div>
        {
            pageNumbers.map((page)=>(
                <div style={{display:'inline', border:'1px solid black', 
                backgroundColor:'orangered', margin:'5px', padding:'3px', 
                borderRadius:'5px'}} onClick={()=>pageHandler(page)}>{page}</div>
            ))
        }
    
    
    
    </div>
  )
}
