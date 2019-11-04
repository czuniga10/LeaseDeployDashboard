import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';

import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/' component={LandingPage} />
      <Route path='/Checkout' component={Dashboard} />
      <Route path='/Cart' component={Dashboard} />
    </div>
  );
}

export default withRouter( (App) );
