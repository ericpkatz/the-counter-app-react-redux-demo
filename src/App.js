import React, { Component } from 'react';
import Nav from './Nav';

class App extends Component{
  constructor(props){
    super();
    this.specialNumber = props.specialNumber; 
  }
  render(){
    return (
      <div className='container'>
        <Nav />
        { this.props.children }
      </div> 
    );
  }
}

export default App;
