import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="nav">
        <h3>Nav</h3>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    )
  }
}

export default Nav;
