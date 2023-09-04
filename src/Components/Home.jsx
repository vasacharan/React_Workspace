import React from 'react';
import Carosuel from './Carosuel';
// import DataHub from './DataHub';
import Practice from './Practice';
import DataHub from './DataHub';
import Dogapi from './Dogapi';

const styles={
  h2Sty:{ 
    textAlign : 'center'
  }  
}
export default function Home() {
  return (
    <div> 
      <div>
      <Carosuel />
      </div>
      <h2 style={styles.h2Sty}>: Welcome to HOME Page :</h2>
   <Practice />
   <DataHub />
   <Dogapi />
    </div>
  )
}
