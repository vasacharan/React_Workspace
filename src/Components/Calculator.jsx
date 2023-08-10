import React, { useState } from 'react';
import '../styles/Calculator.css';

export default function Calculator() {
const [text,setText] = useState([]);
const [value,setValue] = useState(0);

const handleChange =(e)=>{
    setText(e.target.value)
}
const handleClick =(e)=>{
    setValue(eval(text))
}

  return (
    <div>
        <center>
        <div className='outer'>
            <h3>Calculator</h3><br />
            <input type='text' value={text} onChange={handleChange}/>
            <button className='result-btn' onClick={handleClick}>Result</button><br /><br/>
            <h3>Result Value: {value}</h3><br />
            <button onClick={()=>setText(text+'1')}>1</button>
            <button onClick={()=>setText(text+'2')}>2</button>
            <button onClick={()=>setText(text+'3')}>3</button>
            <button onClick={()=>setText(text+'4')}>4</button>
            <button onClick={()=>setText(text+'5')}>5</button><br />

            <button onClick={()=>setText(text+'6')}>6</button>
            <button onClick={()=>setText(text+'7')}>7</button>
            <button onClick={()=>setText(text+'8')}>8</button>
            <button onClick={()=>setText(text+'9')}>9</button>
            <button onClick={()=>setText(text+'0')}>0</button><br /><br />

            <button onClick={()=>setText(text+'+')}>+</button>
            <button onClick={()=>setText(text+'-')}>-</button>
            <button onClick={()=>setText(text+'*')}>*</button>
            <button onClick={()=>setText(text+'/')}>/</button>
            <button onClick={()=>setText('')}>clr</button>

            </div>
            </center>
            <p><li>Simple React Calculator programe</li></p>
    </div>
  )
}
