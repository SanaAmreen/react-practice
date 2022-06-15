import React, { Component } from 'react'

export default class Props extends Component {
    state = {
        users:[{id:1, name:"sana", class: "BE"},{id:2, name:"tana", class: "ME"}]
    }
  render() {
      
    return (
      <div> 
      
      {this.state.users.map(users=>{
          return (
              <h1>{users.id}
              {users.name}
              {users.class}</h1>
          )
      })}
      </div>
    )
  }
}

