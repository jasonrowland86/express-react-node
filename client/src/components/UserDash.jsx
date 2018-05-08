import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class UserDash extends React.Component {
  constructor() {
    super();
    this.state = {
      message: {},
      results: [],
      name: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    axios.get('/user')
    .then(res => {
      this.setState({
        message: res.data,
        results: res.data.result
      }, ()=>{
        console.log("Message from server: ", res.data.message);
      })
    }).catch(err => {
      console.log(err);
    });
  }
  // getUsers() {
  //   fetch('/hello')
  //   .then(res => res.json())
  //   .then(message => this.setState({message}));
  // }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post('/user', {
      name: this.state.name
    })
    .then((res) => {
      console.log(res);
      console.log('posted');
      this.getUsers();
      this.setState({
        name: ''
      })
    });
  }

  handleDelete(e) {
    e.preventDefault();
    let id = e.target.id;
    console.log(e.target.id);
    axios.delete(`/user/${id}`)
    .then(res => {
      console.log('deleted');
      this.getUsers();
    });
  }

  render() {
    console.log(this.state.message.message);
    console.log(this.state.results);
    let message = this.state.message.message;
    let results = this.state.results.map(result =>(
      <div key={result._id} onDoubleClick={this.handleDelete.bind(this)}>
        <p className='name' id={result._id}>{result.name}</p>
      </div>
    ));

    return(
      <div className="main-content">
        <h3>Dashboard</h3>
        <p>{message}</p>
        {results}
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" name="name" placeholder="" value={this.state.name} onChange={this.handleInputChange} required />
          <input type="submit" value="Add User" />
        </form>
      </div>
    )
  }
}

export default UserDash;
