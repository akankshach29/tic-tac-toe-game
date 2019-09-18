import React from 'react'
import './Game.css'

class BoxComponent extends React.Component{
    render(){
        const {value} = this.props;
        return(
            <button className="Box" onClick={this.props.onBoxClick}>{value}</button>
        )
    }
}
export default BoxComponent;