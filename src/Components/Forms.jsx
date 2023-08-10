import React from "react";
// import "../styles/Forms.css";

class Forms extends React.Component{
  constructor(props){
    super(props);
    this.state={
      firstName : "",
      lastName : "",
      email : "",
      password : "",
   
      errMsg : [{
        errFname : "",
        lName : "",
        emailError : "",
        pwerror : ""
      }]
      
    }
    //binding this 
    // this.handleChangeFn = this.handleChangeFn.bind(this);
    // this.handleChangeLn = this.handleChangeLn.bind(this);
    // this.handleChangeEmail = this.handleChangeEmail.bind(this);
    // this.handleChangePw = this.handleChangePw.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  //handling the event to change state by using event handler
  // const [firstName,lastName,email,password] = this.state;
  handleChange=(e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault();
          if(this.state.firstName === ""){
            this.setState({
              errMsg : {
                ...this.state.errMsg,
                errFname : 'Enter Valid First Name',
                // lName : 'Enter Valid Last Name',
                // emailError : 'Enter valid Email',
                // pwerror : 'Enter Valid Password'
              }})
            }
            
              if(this.state.lastName === ""){
                this.setState({
                  errMsg : {
                    ...this.state.errMsg,
                    // errFname : 'Enter Valid First Name',
                    lName : 'Enter Valid Last Name',
                    // emailError : 'Enter valid Email',
                    // pwerror : 'Enter Valid Password'
                  }})

            console.log(this.state.errMsg.errFname);
          }
   
    console.log(this.state);
  }

  render(){
       //this is the method array destructuring used to reduce using the "this.state.{names}" in value attribute
      // this has to be used in inside of render() method
      // const [firstName,lastName,email,password] = this.state;
      
    return(
      <div>
        <center>
        <form onSubmit={this.handleSubmit}>
        <h3>Form validations - class components - by managing state</h3>

        <label>First Name:</label>
        <input type="text" placeholder="First Name" name="firstName"
        value={this.state.firstName} onChange={this.handleChange}/><br/><span style={{color:'red'}}>{this.state.errMsg.errFname}</span><br/>
        
        <label>Last Name:</label>
        <input type="text" placeholder="Last Name" name="lastName"
        onChange={this.handleChange} value={this.state.lastName} /><br/><span>{this.state.errMsg.lName}</span><br/>

        <label>Email:</label>
        <input type="email" placeholder="Email" name="email"
        onChange={this.handleChange} value={this.state.email}/><br/><span>{this.state.errMsg.emailError}</span><br/>

        <label>Password:</label>
        <input type="text" placeholder="Password" name="password"
        onChange={this.handleChange} value={this.state.password}/><br/><span>{this.state.errMsg.pwerror}</span><br/>

        <input type="submit" name="submit" />

        </form>
        </center>
      </div>
    )
  }
}
export default Forms;


