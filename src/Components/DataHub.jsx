import React from 'react'

function DataHub() {

    const DataStores=[
        {
            id:1,name:"John Doe", Desig:"SWE"
        },
        {
            id:2,name:"Raju Rastogi", Desig:"ATest"
        },
        {
            id:3,name:"Ranchhor das chanchar", Desig:"Security"
        },
        {
            id:4,name:"Farhan Qureshi", Desig:"Atest"
        },
        {
            id:5,name:"Silenser", Desig:"ATest"
        },
        {
            id:6,name:"Virus", Desig:"Security"
        },
        {
            id:7,name:"Milimeter", Desig:"SWE"
        }
    ];
    
  return (
    
    <div>
    <h3>DataHub data</h3>
    
      {
        DataStores.filter(item=> item.Desig === 'Security').map(val => <li>{val.name} & {val.id}</li>)
      }
      
     
    </div>
  )
}
export default DataHub