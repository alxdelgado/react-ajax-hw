import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './Login'; 
import MainContainer from './MainContainer';

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      logged: false, 
      username: ''
    }
  }
 
  login = (username) => {
    this.setState({
      username: username,
      logged: true
    });
    console.log(username, 'this is login function in App')
  }

  render() {
    console.log(this.state, 'inside of App component');
    return (
      <div className="App">
      {this.state.logged ? <MainContainer username={this.state.username} /> : <Login login={this.login} />}
      </div>
    );
  }
}

export default App;
