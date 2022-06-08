import React, { Component } from 'react'
import {Card, Button} from 'react-bootstrap'

export class FoodChildC extends Component {
    constructor(props) {
        super(props)
        
      }
  render() {
  
    return (
      <div>
      <div className='car-d'>
      <Card  className='cardss'>
    <Card.Img variant="top" src={this.props.image} className='cardss1'  />
    <Card.Body>
      <Card.Title>{this.props.name}</Card.Title>
      <Card.Text>
        {this.props.price}<br/>{this.props.serve}<br/>
      </Card.Text>
      <Button variant="primary">Have it !!!</Button>
    </Card.Body>
  </Card>
      </div>
      </div>
    )
  }
}

export default FoodChildC