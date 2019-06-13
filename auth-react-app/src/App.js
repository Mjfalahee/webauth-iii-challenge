import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import './App.css';
import Login from './auth/Login';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h3> Auth Challenge. </h3>
        <nav>
          <NavLink to="/login"></NavLink>
        </nav>

        <Route path="/login" component={Login}></Route>
      </div>
    );
  }
}

export default App;
