import React, { useState } from "react";


export default function Services() {
const [input, setInput] = useState({
    firstName: "",
    password: ""
}); 

const chandleInput=(e)=>{
    setInput({...input,[e.target.name] : [e.target.value]})
}

  return (
    <div>
        <center>
        <h3>Forms - Functional components</h3>
            <input type="text" placeholder="First Name" name="firstName" value={input} onChange={chandleInput}/><br /><br />
            <span>{input}</span>
            <input type="text" placeholder="Password" name="password" value={input} onChange={chandleInput}/><br /><br />
            <span>{input}</span>
            <input type='date' /><br /><br />



        </center>
    </div>
  )
}
