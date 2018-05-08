import React from 'react';
import { Link } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Header from './Header';
import Nav from './Nav';
import Info from './Info';
import MainSearch from './MainSearch';
import UserDash from './UserDash';
import SingleFighter from './SingleFighter';
import CompareFighters from './CompareFighters';
import Login from './Login';
import Register from './Register';
import EventCard from './EventCard';
import Events from './Events';
import FighterIndex from './FighterIndex';
import Footer from './Footer';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      mainSearch: true
    }
  }

  handleMainContent() {
    console.log(window.location.pathname);
    if (window.location.pathname == "/") {
      return <MainSearch />
    } else {
      return null
    }
  }

  componentDidMount() {

  }

  render() {
    return(
      <Router>
        <div className="main">
          <Header />
          <Nav/>
          <Info />
          <Route exact path="/" component={MainSearch} />
          <Route exact path="/dashboard" component={UserDash} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/single" component={SingleFighter} />
          <Route exact path="/compare" component={CompareFighters} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/event/:id" component={EventCard} />
          <Route exact path="/fighters" component={FighterIndex} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default Main;
