import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Banner extends React.Component {
  constructor() {
    super();
    this.state = {
      events: null
    }
  }

  componentDidMount() {
    this.getEventImages();
  }

  getEventImages() {
    let current_date = new Date();
    current_date = current_date.toISOString();
    current_date = current_date.split("T");
    current_date = current_date[0];
    axios.get('/events')
    .then(res => {
      let upComingEvents = res.data.events.map(e => {
        let event_date = e.event_date.split("T");
        event_date = event_date[0];
        if (event_date >= current_date) {
          return e
        }
      })
      console.log(upComingEvents);
      this.setState({
        events: upComingEvents
      })
    })
  }

  render() {
    let upComingEvents;
    let eventImages;
    let nextEvent;
    let eventTitle;
    if(this.state.events) {
      console.log("got events");
      upComingEvents = this.state.events.filter(e => e);
      console.log(upComingEvents);

      nextEvent = upComingEvents[upComingEvents.length - 1];
      console.log(nextEvent);

      //Get best event title
      if (nextEvent.title_tag_line && !nextEvent.title_tag_line.includes("Live")) {
        if (nextEvent.title_tag_line.includes("TB")) {
          let split = nextEvent.title_tag_line.split(" ");
          let title_tag_line = "";
            for (let i = 0; i < split.length; i++) {
              if (split[i].includes("TB")) {
                title_tag_line += " TBD ";
              } else {
                title_tag_line += split[i];
              }
            }
          eventTitle = title_tag_line;
        } else {
          eventTitle = nextEvent.title_tag_line;
        }
      } else {
          eventTitle = nextEvent.base_title;
        }

      // eventImages = upComingEvents.map((e) => {
      //   if(e.feature_image) {
      //     if(e.feature_image !== "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffeatures%252F019907_WEB_EventPlaceholderRebrand_PPV.jpg?-mw500-mh500-tc1") {
      //       return <div className="eventImage">
      //         <img src={e.feature_image}></img>
      //       </div>
      //     }
      //   }
      // })
    }
    console.log(this.state.events);
    return (
      <div className="banner">
        <h3>Banner</h3>
        {eventImages}

        {eventTitle}
      </div>
    )
  }
}

export default Banner;
