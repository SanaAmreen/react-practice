import React, { Component } from 'react'

export class LifeCycleAB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"mirha"
      }
      console.log("LifeCycleAB: constructor")
    }
    static getDerivedStateFromProps(props, state){
        console.log("LifeCycleAB: getDerivedStateFromProps")
        return null;
    }

    componentDidMount(){
        console.log("LifeCycleAB: componentDidMount")
    }
  render() {
    console.log("LifeCycleAB:  render")
    return (
      <div>LifeCycleAB</div>
    )
  }
}

export default LifeCycleAB