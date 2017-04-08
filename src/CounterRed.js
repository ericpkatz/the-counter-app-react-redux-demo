import React, { Component} from 'react';
import store, {incrementRed} from './store';

const Counter = ( { count, increment })=> (
  <button className='btn btn-danger' onClick={ increment }>{ count }</button>
);

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

export default CounterContainer;
