import React from 'react'

class Search extends React.Component{
    constructor(){
        super();
        this.state={
            term: ''
        }
    }

    input = (event) => {
        this.setState({
            term: event.target.value
        })
    }

    render(){
        return(
            <div style={{textAlign: "center"}}>
                <input type="text" onChange={this.input}/>
                <input type="submit" value="Search" onClick={() => this.props.search(this.state.term)}/>
            </div>
        )
    }
}

export default Search