import React, { Component} from 'react';
import store, {incrementBlue} from './store';

const Counter = ( { count, increment })=> (
  <button className='btn btn-primary' onClick={ increment }>{ count }</button>
);

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

export default CounterContainer;
