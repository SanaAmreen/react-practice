import React, { Component } from 'react'
import FoodChildC from './FoodChildC.js'

export class FoodParentC extends Component {
   

  render() {
  const  data = [{name:"Shahi chicken", price:500, serve:"2 persons",image:"https://kfoods.com/images1/newrecipeicon/shahi-murgh_5774.jpg"},
    {name:"Grilled chicken", price:400, serve:"2 persons",image:"https://i0.wp.com/www.onceuponachef.com/images/2020/05/best-grilled-chicken-scaled.jpg?resize=1112%2C1536&ssl=1"}]
      
    return (
      <div>
        {data.map(prod=>(
            <FoodChildC name={prod.name} price={prod.price} serve={prod.serve} image={prod.image}/>
        ))}
      </div>
    )
  }
}

export default FoodParentC