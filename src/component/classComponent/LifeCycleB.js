import React, { Component } from 'react'

export class LifeCycleB extends Component {
constructor(props) {
  super(props)

  this.state = {
     name:"mirha"
  }
  console.log("LifecycleB : constructor");
}
static getDerivedFromStateProps(props, state){
  console.log("LifecyleB : getDerivedFromProps");
  return null;

}

componentDidMount(){
  console.log("LifecycleB : componentDidMount");
}

  render() {
    console.log("LifecycleB : render");
    return (
      <div>LifeCycleB</div>
    )
  }
}

export default LifeCycleB