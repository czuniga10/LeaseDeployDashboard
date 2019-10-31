import React, {Component} from 'react';
import './App.css';

import CheckoutDashboard from './Components/CheckoutDash';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <CheckoutDashboard />
    </div>
  );
}

export default App;
