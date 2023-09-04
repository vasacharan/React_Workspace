import React from 'react';
import {ComponentG} from './ComponentG';


//useContext example
export const UserContent = React.createContext();
export const ComponentB = () => {
  return (
    <div>
    
        <UserContent.Provider value={'hello good afternooon!!!'}>
            <ComponentG />
        </UserContent.Provider>
    </div>
  )
}
