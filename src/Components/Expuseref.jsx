import React, { useEffect, useRef } from 'react';
import video from '../Asserts/Videos/videoplayback.mp4';


const Expuseref = () => {

  const data = useRef();
  const videoPlay = useRef();
  const submitHandler= e =>{
    e.preventDefault();
    console.log(data.current.value);
   }
   useEffect(()=>{
    data.current.focus();
   },[])

   const playVideo=(e)=>{
    videoPlay.current.play();
    
   }
   const pauseVideo=(e)=>{
    videoPlay.current.pause();
    
   }
  //it is used to handle change like useState, in useState when state update happen entrire component will render, 
  // not like the way in useRef it can render updated state only. autofocus, handling the state, video handling
  return (
    <div>
    <center>
      <h3>useRef - Functional component</h3>
        <form onSubmit={submitHandler}>
          <input type='text' ref={data} placeholder='First Name' /> <br /><br />
          <input type='submit' />
        </form>

        <button onClick={playVideo}>click to play</button>
        <video src={video} ref={videoPlay} width={500} height={450} />
        <button onClick={pauseVideo}>click to pause</button>
      </center>
    </div>
  )
}


export default Expuseref;