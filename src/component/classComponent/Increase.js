import React, { Component } from 'react'

export class Increase extends Component {
    constructor(){
        super();
        this.state = {
            count:0
        }
    }
    ChangeCount(){
        this.setState({count:this.state.count +1});
        if(this.state.count >= 10){
            this.setState({count : 0})
        }
    }
  render() {
    return (
      <div>Increase : {this.state.count}
      <button onClick={this.ChangeCount.bind(this)}>click</button></div>
    )
  }
}

export default Increase