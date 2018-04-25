import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class MainSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      message: {}
    }
  }

  componentDidMount() {
    axios.get('/hello')
    .then(res => {
      this.setState({
        message: res.data
      }, ()=>{
        console.log("Message from server: ", res.data.message);
      })
    })
  }

  // componentDidMount() {
  //   fetch('/hello')
  //   .then(res => res.json())
  //   .then(message => this.setState({message}))
  // }

  render() {
    console.log(this.state.message.message);
    let message = this.state.message.message;
    return(
      <div className="main-content">
        <h3>Main/Search</h3>
        <p>{message}</p>
      </div>
    )
  }
}

export default MainSearch;
