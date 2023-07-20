import React from "react";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fname : 'Sachin',
            team : 'India'
        }
     }

render(){
    return (
        <div>
            <h1>{this.state.fname}</h1>
            <h3>{this.state.team}</h3>
        </div>
    )
  }
}

export default Header;