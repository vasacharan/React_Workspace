import React,{useState} from "react";


function Tables(){

    const [posts, setPosts] = useState([]);

    function getData(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((resp)=>resp.json())
        .then(text=>{
        
         console.log(text);
         setPosts(text);
       
        })
    }
   
return(
    <div>
    <h3>Table of data Getting from API</h3>
    <h3>Users</h3>
    <table style={{border:1}}>
    <tr>
        <th>userId</th>
        <th>title</th>
        <th>body</th>
    </tr>
   {posts?.map(post=>(
    <tr key={post.id}>
        <td>{post.userId}</td>
        <td>{post.title}</td>
        <td>{post.body}</td>
    </tr>
    ))}
    </table>
    <button onClick={getData}>Tbtn</button>

    </div>
   )
}
export default Tables;