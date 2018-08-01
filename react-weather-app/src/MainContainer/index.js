import React, {Component} from 'react'; 
import Weather from '../Weather';

class MainContainer extends Component {
  constructor() {
    super(); 
    this.state = {
      weather: []
    }
  }

  render() {
    return(
      <div>
        Hi {this.props.username}
      </div>

    )
  }


};




export default MainContainer; 