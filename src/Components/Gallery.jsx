
import React from 'react'

const person = {
    fullName: 'React JS',
    theme:{
        backgroundColor:'yelloW',
        color:'red',
        align:'center'
    }
}
export default function Gallery() {
  return (
    <div style={person.theme}>
        <h3>{person.fullName} Uses</h3>

        <img src="G:\React\react_workspace\src\Images\r2.jpg" alt='man' width={100} height={100}/>
    </div>
  );
}
