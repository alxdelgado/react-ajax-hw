// Functional Component. 
import React from 'react'; 


const WeatherDisplay = (props) => {
  const weatherList = props.weather.map((weather, i) => {
    return(
      <div> 
        <li key={i}>{weather.description}
          <button onClick={props.deleteWeather.bind(null, i)}>Delete</button>
        </li>
      </div>
    )
  });

  return(
    <div> 
      <h4>Weather</h4>
      <ul>
        {weatherList}
      </ul>
    </div>
  )
};


export default WeatherDisplay;