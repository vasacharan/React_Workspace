import React, { Component } from 'react';
import axios from 'axios';
import ApiData from './ApiData';

export default class TableDataApi extends Component {
    constructor(props){
        super(props);
        this.state={
            data : []
        }

    }
    componentDidMount(){

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(Response => {
        this.setState({
            data : Response.data
        })
        console.log('data:', this.state.data)
        })
        .catch(error=> {
            console.log(error.name);
            console.log(error.message);
        });
    }
  render() {
    // const {data} = this.state;
    return (
      <div>
      <h3>get data from API responce - using Axios</h3>
      <center>
        
      </center>
      <ApiData data = {this.state.data} />

      </div>
    )
  }
}

