// import { toast } from "react-toastfy";
import React, { useState } from "react";


export default function Services() {
const [validate, setValidate] = useState({
    firstName: "",
    password: "",
    date: "",
    errMsg: "",
}); 

const user = {
    userName : 'charanpratap',
    password : 'charan@123'
}

localStorage.setItem('user',JSON.stringify(user));
// const val1 = localStorage.getItem('user');

// console.log(JSON.stringify(user.userName));

// const [store, setStore] = useState('');
const {firstName,password,date,errMsg} = validate;

    const chandleInput=(e)=>{
        // e.preventDefault();
        setValidate({...validate,[e.target.name] : [e.target.value]})
    }
    // const storeValue=(e)=>{
    //     setStore(firstName)
    // }

    // const validateUserName = /^[a-zA-Z0-9]{6,15}$/;
    // const validatePassword = /^[a-zA-Z0-9_@]{8,16}$/;


    const submitHandler =(e)=>{
        e.preventDefault();
        if(validateDetails()){
            // console.log('log in proceed');
            fetch('http://localhost:3000/'+firstName).then((res)=>{
                return res.json();
            }).then((resp)=>{
                console.log(resp)
            }).catch((err)=>{
                console.log(err.errMsg);
            })
        }
        // if(!firstName || !password){
        //     setValidate({errMsg : 'Enter Valid name and password'})
        // console.log(validate);

        // }else{

        // setValidate({errMsg : ''})
        // console.log(validate);
        // }
    }
        const validateDetails = () =>{
            let result = false;
            if(firstName == user.userName){
                result = true;
                setValidate({errMsg : 'Successfully logged'})
            }else{
                result = false;
                setValidate({errMsg : 'Enter valid user name'})
            }
    
            if(password == user.password){
                result = true;
                setValidate({errMsg : 'Successfully logged'})
            }else{
                result = false;
                setValidate({errMsg : 'Enter valid password'})
            }

            return result;
        }
      

    
  
  return (
    <div>
        <center>
        <h3>Forms - Functional components</h3>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="First Name" name="firstName" value={firstName} onChange={chandleInput}/><br /><br />
            
            <input type="text" placeholder="Password" name="password" value={password} onChange={chandleInput}/><br /><br />
           
            <input type='date' name="date" value={date} /><br /><br />

            <input type="submit" name="submit" />

            <p><span>{firstName}</span> <span>{password}</span> {date} {errMsg}</p>
            
        </form>
        
        </center>
        
    </div>
  )
}

// <button onClick={storeValue}>click</button>
// <p>{store}</p>