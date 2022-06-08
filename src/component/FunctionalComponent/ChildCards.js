import React from 'react'
import {Card, Button} from 'react-bootstrap'

function ChildCards({button,image,price,title}) {
  return (
    <div className='car-d'>
    <Card className='cardss'>
    `1
    `
  <Card.Img variant="top" src={image} className='cardss1'  />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      Price = <span>&#8377;</span>{price}
    </Card.Text>
    <Button variant="primary"><span>{button}</span></Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default ChildCards