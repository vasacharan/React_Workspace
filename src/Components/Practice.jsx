import React,{useState} from "react";

function Practice(){
// const dataVal = [];
const [users, setUsers] = useState([]);
  // function gettingData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((resp)=>resp.json())
    .then((dataVal)=>{
      setUsers(dataVal)
});
  // }
  const userData = users.filter(user=>user.name.includes('C'));

  return(
    <div>
    <h3> Practice about Fetch Api</h3>
    <table>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>Ph.no</th>
          <th>Zip code</th>
          <th>web site</th>
        </tr>
        {
          userData.map(user=>(<tr>
            <td>{user.name}</td>
            <td>{user.address.city}</td>
            <td>{user.phone}</td>
            <td>{user.address.zipcode}</td>
            <td>{user.website}</td>
        </tr>
        )) }
    </table>
    </div>
  )
}

export default Practice;

// .filter(user=>user.name.includes('L'))
// address": {
//   "street
// <button onClick={gettingData}>click</button>
// ----------------------------------

// import React from 'react';

// export default function Practice() {
//   const friends = [
//   {
//     name : 'Mohan',
//     age : 28,
//     city : 'Vizag'
//   },
//   {
//     name : 'Venky',
//     age : 31,
//     city : 'Vizag'
//   },
//   {
//     name : 'Naveen',
//     age : 26,
//     city : 'Vizag'
//   }];

//   return (
//     <div>
//     <h3>Map Methods</h3> 
//    {
//     friends.filter(friend => friend.name === 'Mohan' ).map(item=><li>{item.name}</li>)
//    }
//     </div>
//   )
// }
