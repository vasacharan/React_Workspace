import React from 'react';

export default function Todosapp({todoslist, deleteHandler, editHandler}) {
    const styles = {
        design:{
            color:'white',
            backgroundColor:'red',
            padding:'auto 6px',
            borderRadius:'5px',
        }
    }
  return (
    <div>
    {
        todoslist.map((todo,index)=>(
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',lineHeight:'10px'}} 
            key={index}>
            <h5>{todo}</h5> &nbsp; <button style={styles.design} onClick={()=>deleteHandler(index)}>Delete</button>
            
            </div>)
        )
    }
    
    </div>
  )
}
