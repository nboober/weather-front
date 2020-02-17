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
            </div>
        )
    }
}

export default Day