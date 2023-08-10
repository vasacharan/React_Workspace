
import React from 'react'

const person = {
    fullName: 'React JS',
    theme:{
        backgroundColor:'yelloW',
        color:'red',
        textAlign:'center',
        width:'30%'
    },
    textTheme:{
        color: 'blue'
    }
}
export default function Gallery() {
  return (
    <div style={person.theme}>
        <h3>{person.fullName} Uses:</h3>

        <img src={'/Images/f1.jpg'} alt='man' style={{width:'15%'}} />
        <ul style={person.textTheme}>
            <li>Open source Javascript library</li>
            <li>Used to build UI, responsible for build UI</li>
            <li>build single page application</li>
        </ul>
    </div>
  );
}
