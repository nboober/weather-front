import React from 'react';
import WeatherContainer from './containers/WeatherContainer'
import './App.css';
// meta weather images
// `https://www.metaweather.com/static/img/weather/png/${eachDay.weather_state_abbr}.png`


class App extends React.Component{
  constructor(){
    super();
    this.state={
      myLocation:"",
      sixdayforecast:"",
      weatherIcons: ""
    }
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/test")
    .then(response => response.json())
    .then(testDataArray => this.setState({
      sixdayforecast: testDataArray
      },()=>{
        this.getWeatherIcons();
        this.getGeoLocation();
      })
    )
  }

  getGeoLocation = () => {
    const showPosition = (position) => {
      // console.log(position.coords.latitude);
      // console.log(position.coords.longitude);
        
        this.setState({
          myLocation: `${position.coords.latitude},${position.coords.longitude}`
        }, () => {
          this.fetchLocalWeather(this.state.myLocation);
        })
      
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      alert("Geolocation is not supported by this browser.");
    }
  }

  fetchLocalWeather = (coords) => {

    fetch("http://localhost:3000/myarea",{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        coordinates: coords
      })
    })
    .then(response => response.json())
    .then(myLocalWeatherArray => this.setState({
      sixdayforecast: myLocalWeatherArray
    },()=>{
      this.getWeatherIcons();
    })
    )
    .catch(err => console.log(`There was a problem with the fetch: ${err}`))

  }

  getWeatherIcons = () => {

    let iconArray = [];

    this.state.sixdayforecast.consolidated_weather.map(eachDay=>{
     iconArray.push(`https://www.metaweather.com/static/img/weather/png/${eachDay.weather_state_abbr}.png`)
    })

    this.setState({
      weatherIcons: iconArray
    })
  }

  render(){
    return(
      <div>
        <WeatherContainer weather={this.state.sixdayforecast} icons={this.state.weatherIcons}/>
      </div>
    )
  }
}

export default App;
