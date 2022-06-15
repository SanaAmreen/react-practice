import React, { Component } from 'react'
import LifeCycleAB from './LifeCycleAB'

export class LifeCycleAA extends Component {
constructor(props) {
  super(props)

  this.state = {
     name:"sana"
  }
  console.log("LifeCycleAA: constructor ")
}

static getDerivedStateFromProps(props, state){
    console.log("LifeCycleAA: getDerivedFromStateProps ")
    return null;
    
}

componentDidMount(){
    console.log("LifeCycleAA:  componentDidMount");
}

  render() {
    console.log("LifeCycleAA:  render")
    return (
      <div>LifeCycleAA
      <LifeCycleAB/>
      </div>
    )
  }
}

export default LifeCycleAA