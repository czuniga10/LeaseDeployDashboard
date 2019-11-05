import React, { Component } from 'react';
import prog from '../../prog.png';
import './Header.css';

class Header extends Component {

    render(){
        return (
            <div className="header">
                <div className="img-holder">
                    <img className="prog" src={prog} alt="Loading..."></img>
                </div>
            </div>
        )
    }
}

export default Header;