import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      sixdayforecast:"",
      myLocation:"",
    }
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/test")
    .then(response => response.json())
    .then(testDataArray => this.setState({
      sixdayforecast: testDataArray
      },()=>{
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
        })
      
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      alert("Geolocation is not supported by this browser.");
    }
  }

  render(){
    return(
      <div>
        Hello
      </div>
    )
  }
}

export default App;
