import React, { Component} from 'react';
import {incrementBlue} from './store';
import { connect } from 'react-redux';

const Counter = ( { count, increment, text })=> (
  <button className='btn btn-primary' onClick={ increment }>{ text } { count }</button>
);

/*
class CounterContainer extends Component{
  constructor(){
    super();
    this.state = { count: store.getState().counter.blue };
  }
  componentDidMount(){
    this.unsubscribe = store.subscribe(()=> this.setState({ count: store.getState().counter.blue}));
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  render(){
    return (
      <Counter count={ this.state.count } increment={ ()=> store.dispatch( incrementBlue() )} />
    );
  }

}
*/

const mapStateToProps = (state)=> {
  return {
    count: state.counter.blue,
    text: 'Blue'
  };
};

const mapDispatchToProps = (dispatch)=> {
  return {
    increment: ()=> dispatch(incrementBlue())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
