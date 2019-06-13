import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import './App.css';
import Login from './auth/Login.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h3> Auth Challenge. </h3>
        <nav>
          <NavLink to="/login"> Login </NavLink>
        </nav>
        <Route path="/login" component={Login}></Route>
      </div>
    );
  }
}

export default App;
