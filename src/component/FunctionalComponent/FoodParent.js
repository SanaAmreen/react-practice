import React from 'react'
import FoodChild from './FoodChild'

function FoodParent() {
    const data = [{name:"Shahi chicken", price:500, serve:"2 persons",image:"https://kfoods.com/images1/newrecipeicon/shahi-murgh_5774.jpg"},
    {name:"Grilled chicken", price:400, serve:"2 persons",image:"https://i0.wp.com/www.onceuponachef.com/images/2020/05/best-grilled-chicken-scaled.jpg?resize=1112%2C1536&ssl=1"},
    {name:"chicken Fricassee", price:600, serve:"2 persons",image:"https://www.recipetineats.com/wp-content/uploads/2021/09/Chicken-Fricasse_03-SQ.jpg"},
    {name:"Garlic chicken", price:500, serve:"1 persons",image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2019%2F08%2F26232612%2F3748651.jpg&q=60"}]
    console.log(data)
  return (
    <div>
    {data.map((product, i)=>(
        <FoodChild name={product.name} price={product.price} serve={product.serve} image={product.image} key={i}/>
  ))}
    </div>
  )
}

export default FoodParent