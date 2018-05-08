import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Info extends React.Component {
  constructor() {
    super();
    this.state = {
      events: ''
    }

  }

  componentDidMount() {
    this.getEvents();
  }

  getEvents() {
    axios.get('/events')
    .then(res => {
      let events = JSON.parse(JSON.stringify(res.data.events));
      this.setState({
        events: events
      })
    })
  }

  render() {
    console.log(this.state.events);
    if(this.state.events) {
      var events = this.state.events.map((e) => {
        // return <a href='' id={e.id}>{e}</a>
        return <Link to={`/event/${e.id}`}>{e.title_tag_line}</Link>
      })
      console.log(events);
    }
    return(
      <div className="info">
        <h3>Info</h3>
        {events}
      </div>
    )
  }
}

export default Info;
