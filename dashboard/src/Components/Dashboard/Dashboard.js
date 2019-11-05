import React, {Component} from 'react';
import {checkout} from '../../Data/CheckoutActive.json';
import {cart} from '../../Data/CartActive.json';

import DashItem from './DashItem';
import './Dashboard.css';

class CheckoutDashboard extends Component {
  constructor(props) {
    super(props)
      this.state = {
        tickets: [],
        team: ""
      }
  }

  componentDidMount() {
    let newTeam = this.props.match.path.slice(1);
    let data = '';
    if(newTeam === 'Cart') {
      data = cart;
    }else {
      data = checkout;
    }
    console.log(newTeam, data)
    this.setState({
      tickets: data,
      team: newTeam
    })
  }

  render() {
      const tickets = this.state.tickets;
      const displayDashItems = tickets.map(ticket => {
        const index = tickets.indexOf(ticket);
        return (<DashItem
          key={index}
          id={ticket.id}
          desc={ticket.desc}
          stories={ticket.stories}
          status={ticket.status}
          approval={ticket.approval}
        />)
      })
    return (
      <div className="ticket-wrapper">
        <div className="title">{this.state.team} - Active</div>
        <div className="titles-holder">
          <div className="title-ccsx">Ticket#</div>
          <div className="desc-ccsx">Description</div>
          <div className="jira-ccsx">Jira Tickets</div>
          <div className="status-ccsx">Status</div>
          <div className="approval-ccsx">Approval</div>
        </div>
        {displayDashItems}
      </div>
    );
  }
}

export default CheckoutDashboard;