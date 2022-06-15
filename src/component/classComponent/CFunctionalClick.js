import React, { Component } from 'react'

export class CFunctionalClick extends Component {
    constructor(props){
        super(props);
       // this.ChangeEvent=this.ChangeEvent.bind(this)
        this.state={
            course:"MTech" ,
            roll:this.props.roll
        }

    }
    ChangeEvent=()=>{
      this.setState({course:"BTech"})
      if (this.state.course==="BTech"){
          this.setState({course:"MCA"})
      }else if (this.state.course==="MCA"){
          this.setState({course:"MTech"})
      }
    }
  render() {
    return (
      <div><h1>{this.state.course}{this.props.roll}</h1>
      <button onClick={this.ChangeEvent}>ClickMe.</button>
      </div>
    )
  }
}

export default CFunctionalClick