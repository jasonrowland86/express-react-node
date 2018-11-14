import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Banner extends React.Component {
  constructor() {
    super();
    this.state = {
      events: null,
      loading: true
    }
  }

  componentDidMount() {
    this.setState({
      loading: false
    })
    this.getEvents();
    this.nextEventCountdown();
  }

  getEvents() {
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
      let filterEvents = res.data.events.filter(e => e);
      console.log(filterEvents);
      let nextEvent = filterEvents[filterEvents.length - 1];
      console.log(nextEvent);
      let nextEventDate = Date.parse(nextEvent.event_date);
      console.log(nextEventDate);
      this.setState({
        events: upComingEvents,
        nextEventDate: nextEventDate
      })
    })
  }

  //Next event clock
  eventClock(currentDate, nextEventDate) {
      let distance = nextEventDate - currentDate;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 ));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if(this.state.events) {
        return (
          <div className="eventClock">{days + "d " + hours + "h " + minutes + "m " + seconds+ "s"}</div>
        )
      } else {
        return (
          <div></div>
        )
      }
  }

  nextEventCountdown = () => {
    let currentDate = new Date().getTime();
    let distance = this.state.nextEventDate - currentDate;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 ));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setInterval(() => {
      this.setState({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      })
    }, 1000);

  }

  render() {
    let eventTitle1;
    let eventTitle2;
    let eventTitle3;
    let upComingEvents;
    let eventImages;
    let nextEvent;
    let eventTitle;
    let eventClock;
    let nextEventDate;
    let currentDate = new Date().getTime();
    console.log(currentDate);
    // currentDate = currentDate.toISOString();
    // console.log(currentDate);
    // currentDate = currentDate.split("T");
    // currentDate = currentDate[0];

    if(this.state.events) {
      console.log("got events");
      //Get only the up coming events
      upComingEvents = this.state.events.filter(e => e);
      //Get next event from upComingEvents
      nextEvent = upComingEvents[upComingEvents.length - 1];
      nextEventDate = Date.parse(nextEvent.event_date);

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
      console.log(eventTitle);
      eventTitle = eventTitle.split(" ");
      console.log(eventTitle);
      eventTitle1 = eventTitle[0];
      eventTitle2 = eventTitle[1];
      eventTitle3 = eventTitle[2];

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
    return (
      <div className="banner">
        <h3>Banner</h3>
        <div className="banner-title">
          <div className="banner-title-left">{eventTitle1}</div>
          <div className="banner-title-center">{eventTitle2}</div>
          <div className="banner-title-right">{eventTitle3}</div>
        </div>
        {eventImages}
        {this.eventClock(currentDate, nextEventDate)}
      </div>
    )
  }
}

export default Banner;
