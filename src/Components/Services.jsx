import React, { useState } from "react";
import { ApiTesting } from "./ApiTesting";


export default function Services() {
const [validate, setValidate] = useState({
    firstName: "",
    password: "",
    date: "",
    errMsg: "",
}); 
const [store, setStore] = useState('');
const {firstName,password,date,errMsg} = validate;

const chandleInput=(e)=>{
    // e.preventDefault();
    setValidate({...validate,[e.target.name] : [e.target.value]})
}
const storeValue=(e)=>{
    setStore(firstName)
}

const submitHandler =(e)=>{
    e.preventDefault();
    if(!firstName || !password){
        setValidate({errMsg : 'Enter Valid name and password'})
    console.log(validate);
   }else{
    setValidate({errMsg : ''})
    console.log(validate);
   }
}

  return (
    <div>
        <center>
        <h3>Forms - Functional components</h3>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="First Name" name="firstName" value={firstName} onChange={chandleInput}/><br /><br />
            
            <input type="text" placeholder="Password" name="password" value={password} onChange={chandleInput}/><br /><br />
           
            <input type='date' name="date" value={date} onChange={chandleInput}/><br /><br />

            <input type="submit" name="submit" />

            <p><span>{firstName}</span> <span>{password}</span> {date} {errMsg}</p>
            
        </form>
        <button onClick={storeValue}>click</button>
        <p>{store}</p>
        </center>
        
    </div>
  )
}

 