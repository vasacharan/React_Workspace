import React, { useState } from 'react';
import '../styles/TodoList.css';
import Todosapp from './Todosapp';

export default function TodoList() {
    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);



    const changeHandler = (e) =>{
        setTask(e.target.value);  
    }
    const submitHandler =(e)=>{
        e.preventDefault();
        const newTodos = [...todos, task];
        setTodos(newTodos);
        setTask('');
    }

    const deleteHandler = (indexValue) =>{
        const newTodos = todos.filter((todo,index)=> index !== indexValue)
        setTodos(newTodos);
    }

    const editHandler = (indexValue) =>{
        const newTodos = todos.find((todo,index)=> index === indexValue)
        setTodos(newTodos);
    }


  return (
    <div>
        <div className='card'>
            <div className='card-body'>
                <div className='card-item'>
                    <center>
                        <h3>Todo list Application</h3>
                            <form onSubmit={submitHandler}>
                                <input type='text' placeholder='Add' name='Add' value={task} onChange={changeHandler} /> &nbsp;&nbsp;
                                <input type='submit' value='Add' name='Add' />
                            </form>
                            <Todosapp todoslist={todos} deleteHandler={deleteHandler} editHandler={editHandler}/>
                    </center>
                </div>
            </div>
        </div>
        
    </div>
  )
}
