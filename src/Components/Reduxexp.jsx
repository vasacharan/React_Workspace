import React from 'react';
import { connect } from 'react-redux';
import IncdecCount from '../Reducer/IncdecCount';
import { increase, decrease } from '../Action/index';


const Reduxexp = ({count,increase,decrease}) => {

  return (
    <div>
        Count From Reduxexp Component : {count}  <br /><br />
        <button onClick={()=>{increase()}}>Increment</button>
        <button onClick={()=>{decrease()}}>Decrement</button>
    </div>
  )
}

const mapStateToProps = (state) =>({
    count : state.count
})
  
export default connect(mapStateToProps)(Reduxexp);