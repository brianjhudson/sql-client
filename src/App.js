import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
         <Nav />
         <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
         </Switch>
      </div>
    );
  }
}

export default App;
