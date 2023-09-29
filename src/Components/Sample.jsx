import React from 'react';

export default function Sample(props) {
  console.log('props',props);
  return (
    <div>
      <h3>From samples Component</h3>
      <h5>Hello world</h5>
   <h3>{props.data}</h3>
 
    </div>
  )
}
