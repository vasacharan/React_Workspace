import React from 'react';
import { connect } from 'react-redux';
import { Reduxexp } from './Components/Reduxexp';
// import IncdecCount from './Reducer/IncdecCount';

const Reduxexp2 = ({count}) => {
  return (
    <div>
        <center>
            Count from Redux Example 2 Js component : {count} <br /><br /><hr />
            <Reduxexp />
        </center>
    </div>
  )
}

const mapStateToProps = (state) =>({

    count : state
})

export default connect(mapStateToProps)(Reduxexp2);