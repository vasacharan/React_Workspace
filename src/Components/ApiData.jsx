import React, { useState } from 'react';
import '../styles/ApiData.css';

function ApiData(props) {
  const [reqdata, setReqdata] = useState([]);
  console.log('props',props);

  const handleEvent=()=>{
    setReqdata(props.data)
    console.log(setReqdata);
    console.log('hello');
   }
// let filtered = props.data.filter(item=>item.name.includes('N'))
  return (
    <div>
    <h3>Api Data: from child</h3>
    
  
    
    
    <table>
            <tr>
                <th>User Id</th>
                <th>User Name</th>
                <th>User email</th>
                <th>User City</th>
                <th>User Zipcode</th>
                <th>User suite</th>
            </tr>
                {
                  props.data.map(user=> (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address.city}</td>
                        <td>{user.address.zipcode}</td>
                        <td>{user.address.suite}</td>
                    </tr>
                ))}
        </table>
  
        <select name='select fruit'>
        <option onChange={handleEvent} value={reqdata.map(user=><li>{user.name}</li>)}>Name</option>
  
        </select>

    </div>
  )
}

export default ApiData;
