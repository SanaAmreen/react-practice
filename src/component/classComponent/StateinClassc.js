import React, { Component } from 'react'
import { Col } from 'react-bootstrap'

export class StateinClassc extends Component {
  constructor(props){
      super(props)
      
      this.state={
        color : ""
      }
    
  }
  changeColor=()=>{
      this.setState({color : "yellow"})   
      if(this.state.color === "yellow"){
          this.setState({color:"red"})
      } else if(this.state.color === "red"){
          this.setState({color : "black"})
      } 
}
  render() {
      console.log(this.state.color)
    return (
      <div>
      <h1 style={{color:this.state.color}}>State in class component </h1>
      <button onClick={this.changeColor}>Change color</button>
      </div>
    )
  }
}

export default StateinClassc