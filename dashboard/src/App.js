import React from 'react';
import { HashRouter, Route, withRouter } from 'react-router-dom';
import './App.css';

import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <HashRouter basename='/'>
      <div className="App">
        <Header />
        <Route exact path='/' component={LandingPage} />
        <Route path='/Checkout' component={Dashboard} />
        <Route path='/Cart' component={Dashboard} />
      </div>
    </HashRouter>
  );
}

export default withRouter( (App) );
