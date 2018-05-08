import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class MainSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      message: {},
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   axios.post('/user', {
  //     name: this.state.name
  //   })
  //   .then((res) => {
  //     console.log(res);
  //     console.log('posted');
  //     this.getUsers();
  //     this.setState({
  //       name: ''
  //     })
  //   });
  // }

  render() {
    let message = this.state.message.message;
    console.log(message);
    return(
      <div className="main-content">
        <h3>MainSearch</h3>
        <p>{message}</p>
      </div>
    )
  }
}

export default MainSearch;
