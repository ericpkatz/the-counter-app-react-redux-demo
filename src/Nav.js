import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const Nav = ({red, blue})=> (
  <div>
    <Link to='/red'>Red ({ red })</Link>
    {' '}
    <Link to='/blue'>Blue ({ blue })</Link>
  </div>
);

const mapStateToProps = (state)=> (
  state.counter
  /*
  {
    red: state.counter.red,
    blue: state.counter.blue
  }
  */
);
export default connect(mapStateToProps)(Nav);
