import React, {Component} from 'react'; 

class Login extends Component {
  constructor() {
    super(); 
    this.state = {
      username: '', 
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  
  }

  handleSubmit = (e) => {
    e.preventDefault
    console.log('handle submit is working'); 
    this.props.login(this.state.username) 
  
  }

  render() {
    return(
      <div id="login">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" onChange={this.handleChange} value={this.state.value} placeholder="username" />
          <input type="password" name="password" onChange={this.handleChange} value={this.state.value} placeholder="password" />
          <button type="text" value="submit">Submit</button>
        </form>
      </div>

    )
  }

};

export default Login; 
