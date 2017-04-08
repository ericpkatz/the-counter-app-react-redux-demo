import React from 'react';
import { Link } from 'react-router';

const Nav = ()=> (
  <div>
    <Link to='/red'>Red</Link>
    {' '}
    <Link to='/blue'>Blue</Link>
  </div>
);

export default Nav;
