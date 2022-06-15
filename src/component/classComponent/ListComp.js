import React, { Component } from 'react'

export class ListComp extends Component {
  render() {
      const person = ["sana",25,"engineer"]
      const newPerson = person.map(function(person){
          return <li>{person}</li>
      })
     
    return (
      <div>
     <ul>{newPerson}</ul>
     <li>name : {person[0]}</li>
      </div>
    )
  }
}

export default ListComp