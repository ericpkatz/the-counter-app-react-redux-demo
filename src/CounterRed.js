import React, { Component} from 'react';
import {incrementRed} from './store';
import { connect } from 'react-redux';

const Counter = ( { count, increment, text })=> (
  <button className='btn btn-danger' onClick={ increment }>{ text }{ count }</button>
);

/*
class CounterContainer extends Component{
  constructor(){
    super();
    this.state = { count: store.getState().counter.red };
  }
  componentDidMount(){
    this.unsubscribe = store.subscribe(()=> this.setState({ count: store.getState().counter.red}));
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  render(){
    return (
      <Counter count={ this.state.count } increment={ ()=> store.dispatch( incrementRed() )} />
    );
  }

}
*/

const mapStateToProps = (state)=> (
  {
    count: state.counter.red,
    text: 'Red'
  }
);

const mapDispatchToProps = (dispatch)=>(
  {
    increment: ()=> dispatch(incrementRed()) 
  }
);
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
