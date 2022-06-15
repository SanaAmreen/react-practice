import React, { Component } from 'react'

export class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            contactNo:'',
        }
    }
    handleusername=(e)=>{
       
        this.setState({username: e.target.value})
    }
    handlenumber=(e)=>{
     
      this.setState({
        contactNo:e.target.value

      })
      
    }
    handleSubmit=(e)=>{
      e.preventDefault();
      alert(`${this.state.username}  ${this.state.contactNo}`)

    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
   

  render() {
    return (
        
      <form onSubmit={this.handleSubmit}>
      <div>
     <label>username:</label>
      <input type='text' value={this.state.username} onChange={this.handleusername}></input>
      </div>
      <div>
      <label>Contact No.:</label>
      <input type='number' value={this.state.contactNo} onChange={this.handlenumber}></input>

      <button>submit</button>

      
      </div>
      </form>
    )
  }
}

export default Form