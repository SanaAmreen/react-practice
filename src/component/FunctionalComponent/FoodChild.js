import React from 'react'
import { Card, Button } from 'react-bootstrap'

function FoodChild(props) {
  return (
    <div className='car-d'>
    <Card  className='cardss'>
  <Card.Img variant="top" src={props.image} className='cardss1'  />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
      {props.price}<br/>{props.serve}<br/>
    </Card.Text>
    <Button variant="primary">Have it !!!</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default FoodChild