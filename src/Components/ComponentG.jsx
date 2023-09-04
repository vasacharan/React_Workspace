import React from 'react';
import {UserContent} from './ComponentB';

export const ComponentG = () => {
  return (
    <div>content of ComponentG
    <UserContent.Consumer>
      {value =><p>{value}</p>}
    </UserContent.Consumer>
    
    
    </div>
  )
}
