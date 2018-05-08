import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class EventCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: ''
    }

  }

  componentDidMount() {
    this.getCard();
  }

  getCard() {
    let id = window.location.pathname.split('/');
    id = id[2];
    console.log(id);
    axios.get(`/card/${id}`)
    .then(res => {
      console.log(res.data);
      this.getEvent();
      this.setState({
        card: res.data
      })
    })
  }

  getEvent() {
    let id = window.location.pathname.split('/');
    id = id[2];
    axios.get('/events')
    .then(res => {
      let events = JSON.parse(JSON.stringify(res.data.events));
      console.log(events);
      let thisEvent = events.filter(e => e.id == id);
      console.log(thisEvent);
      this.setState({
        events: events,
        eventTitle: thisEvent[0].base_title,
        eventTagLine: thisEvent[0].title_tag_line
      })
    })
  }

  render() {
    if (this.state.card.card) {
      var matchUps = this.state.card.card.map(c => {
        return <div>
          <p>{c.fighter1_first_name + ' ' + c.fighter1_last_name + ' VS ' + c.fighter2_first_name + ' ' + c.fighter2_last_name}</p>
        </div>
      })
      console.log(matchUps);
    }
    return(
      <div className="main-content">
        <h3>{this.state.eventTitle}</h3>
        <h4>{'"' + this.state.eventTagLine + '"'}</h4>
        {matchUps}
      </div>
    )
  }
}

export default EventCard;
