import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import './App.css';
import Login from './auth/Login.js';
import SignUp from './auth/SignUp';

class App extends React.Component {

  logoutHandler = e => {
    e.preventDefault();
    localStorage.removeItem('token');
    window.location.reload();
  }

  render() {
    return (
      <div className="App">
        <h3> Auth Challenge. </h3>
        <nav>
          <NavLink to="/login"> Login </NavLink>
          <NavLink to="/signup"> Sign Up </NavLink>
          <button onClick={this.logoutHandler}> Logout </button>
        </nav>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </div>
    );
  }
}

export default App;
