import React, { Component } from 'react';
import './App.css';

import Landing from "./components/Landing";
import Main from "./components/Main";

class App extends Component {
  constructor() {
    super();
    this.state = {
      landing: true
    }
  }
  
  changePage() {
    console.log("clicked");
    this.setState({
      landing: false
    })
  }
  handleLanding() {
    if (this.state.landing) {
      return <Landing changePage={this.changePage.bind(this)}/>
    } else {
      return <Main />
    }
  }
  
  render() {
    if(this.state.landing) {
      console.log("true");
    } else {
      console.log("flase");
    }
    return (
      <div className="App">
        {this.handleLanding()}
      </div>
    )
  }
}

export default App;
