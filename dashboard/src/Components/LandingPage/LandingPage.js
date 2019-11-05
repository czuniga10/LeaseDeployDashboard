import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './LandingPage.css';

class LandingPage extends Component {
  constructor(props) {
    super(props)
      this.state = {
      }
  }

  render() {
    return (
      <div className="landing-page-wrapper">
          <Link to={'/Checkout'} >
            <button id="Checkout">Checkout</button>
          </Link>
          <Link to={'/Cart'} >
            <button id="Cart">Cart</button>
          </Link>
      </div>
    );
  }
}

export default LandingPage;