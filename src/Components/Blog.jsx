import React, { useState } from 'react';
import Sample from './Sample';
import shirt from '../Images/f1.jpg'

const styles={
  h2Sty:{ 
    color: 'orange',
    textAlign : 'center'
  }  
}

let text = "this is props passing from Blog (Parent)";

export default function Blog(){ 
  const [name, setName] = useState({
    firstName : 'Charan',
    lastName : 'Vasa'
  });

   const nameChange = e =>{
    setName({...name, firstName: e.target.value, lastName: e.target.value});
   }

  const date = new Date();
  const newDate = date.toDateString();

  return (
    <div>
      <h2 style={styles.h2Sty}>Welcome to <u>Blog</u> Page....Date:{newDate}</h2>
      
      <h1>my name is {name.firstName} and last name is {name.lastName}</h1>
      <button onClick={nameChange}>change</button>
      <Sample data={text}/>
      <center>
      <h3>Types of FORMS</h3>
        <form>
          <input type='text'/><br />
          <input type='checkbox' name='languag' /><label>HTML</label>
          <input type='checkbox' name='languae' /><label>CSS</label>
          <input type='checkbox' name='languge' /><label>JavaScript</label>
          <input type='checkbox' name='langage' /><label>ReactJS</label><br />
          <input type='range' name='range' value={50}/><label>Range</label><br />
          <input type='color' name='color' /><label>color</label><br />
          <input type='datetime-local' name='date' /><label>date</label><br />
          <input type='file' name='date' /><label>upload file</label><br />
          <input type='hidden' name='hidden' /><label>hidden data</label><br />
          <input type='image' name='img' src={shirt} width={50} height={50}/><label>img displayed by using input</label><br />
          <input type='month' name='month' /><label>month att</label><br />
          <input type='number' name='number' /><label>number att</label><br />
          <input type='password' name='password' /><label>password att</label><br />
          <input type='radio' name='radio' /><label>HTML</label><input type='radio' name='radio' /><label>CSS</label><input type='radio' name='radio' /><label>JSscript</label><br />
          <input type='reset' name='reset' /><label>reset value att</label><br />
          <input type='search' name='search' /><label>search att</label><br />
          <input type='submit' name='submit' /><label>submit att</label><br />
          <input type='tel' name='none' /><label>tel att</label><br />
          <input type='time' name='time' /><label>time att</label><br />
          <input type='url' name='url' /><label>url att</label><br />
          <input type='week' name='week' /><label>week att</label><br />
        </form>
      
      </center>
    </div>
  )
}
 