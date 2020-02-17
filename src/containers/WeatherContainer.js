import React from 'react';
import Day from '../children/Day'

class WeatherContainer extends React.Component{
    render(){
        return(
            <div style={{width:"100vw", textAlign: "center"}}>
                <h2>{this.props.weather.title}</h2>
                {this.props.weather ? this.props.weather.consolidated_weather.map((day, index) => {
                    return <Day day={day} icon={this.props.icons[index]}/>
                }) : null}
            </div>
        )
    }
}

export default WeatherContainer