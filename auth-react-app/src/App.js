import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import './App.css';
import Login from './auth/Login.js';
import SignUp from './auth/SignUp';
import UserList from './users/UserList';

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
          <NavLink to="/users"> Users </NavLink>
          <button onClick={this.logoutHandler}> Logout </button>
        </nav>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/users" component={UserList} />
      </div>
    );
  }
}

export default App;
