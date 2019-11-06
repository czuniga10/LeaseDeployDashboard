import React, {Component} from 'react';

import './Dashboard.css'

class DashItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const {id, desc, stories, status, components} = this.props;

        return(     
            <div className="Dash-holder">
                <div className="info-ccsx">
                    {id}
                </div>
                <div className="info">
                    {desc}
                </div>
                <div className="info">
                    {stories}
                </div>
                <div className="info-status" >
                    {status}
                </div> 
                <div className="info-approval" >
                    {components}
                </div> 
            </div> 
        )
    }
}
export default DashItem;