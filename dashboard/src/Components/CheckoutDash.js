import React, {Component} from 'react';

class CheckoutDashboard extends Component {
  constructor(props) {
    super(props)
      this.state = {
        tickets: []
      }
  }
  render() {
      const tickets = this.state.tickets;
      const displayTicketItems = tickets.map(ticket => {
        const index = tickets.indexOf(ticket);
        return (<TicketItem
          id={ticket.id}
          desc=""
        />)
      })
    return (
      <div className="App">
      </div>
    );
  }
}

export default CheckoutDashboard;