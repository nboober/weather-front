import React from 'react'

class Day extends React.Component{
    constructor(){
        super();
        this.state={
            celcTemps: "",
            farTemps: []
        }
    }

    componentDidMount = () => {

        this.setState({
            celcTemps: [this.props.day.min_temp, this.props.day.max_temp, this.props.day.the_temp]
        }, ()=>{
            this.state.celcTemps.forEach(temp=>{
                this.tempConverter(temp);
            })
        })

    }

    tempConverter = (celsius) => {
        let cTemp = celsius;
        let cToFahr = cTemp * 9 / 5 + 32;
        this.setState(prevState => ({
            farTemps: [...prevState.farTemps, Math.round(cToFahr)]
        })
        )
    }

    render(){
        return(
            <div style={{display: "inline-block", margin: "20px"}} >
                <img src={this.props.icon} width="50px" height="50px" alt="weather icon" />
                <p>{this.props.day.applicable_date}</p>
                <p>Current-Temp: {this.state.farTemps[2]}°F</p>
                <div style={{float: "left", fontSize: ".7rem", marginRight: "5px", border: "1px solid black", padding: "3px"}}>
                    <p>Min-Temp: {this.state.farTemps[0]}°F</p>
                    <p>Max-Temp: {this.state.farTemps[1]}°F</p>
                </div>
                <div style={{float: "right", fontSize: ".7rem", border: "1px solid black", padding: "3px"}}>
                    <p>Humidity: {this.props.day.humidity}%</p>
                    <p>Wind Speed: {Math.round(this.props.day.wind_speed)}</p>
                </div>
            </div>
        )
    }
}

export default Day