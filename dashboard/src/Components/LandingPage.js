import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class LandingPage extends Component {
  constructor(props) {
    super(props)
      this.state = {
      }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="landing-page-wrapper">
          landing page
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