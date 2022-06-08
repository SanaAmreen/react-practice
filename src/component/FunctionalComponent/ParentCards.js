import React from 'react'
import ChildCards from './ChildCards'

function ParentCards() {
  const data = [{ button:"Add to cart", price:1000,title:"Beautiful GoldPlated Earings",image:"https://tse4.mm.bing.net/th?id=OIP.RCbOjS5Cv4PuTG5A9KtA2gHaHa&pid=Api&P=0&w=159&h=159"},
  { button:"Add to cart", price:1000,title:"Beautiful GoldPlated Earings",image:"https://tse4.mm.bing.net/th?id=OIP.RCbOjS5Cv4PuTG5A9KtA2gHaHa&pid=Api&P=0&w=159&h=159"},
  { button:"Add to cart", price:1000,title:"Beautiful GoldPlated Earings",image:"https://tse4.mm.bing.net/th?id=OIP.RCbOjS5Cv4PuTG5A9KtA2gHaHa&pid=Api&P=0&w=159&h=159"},
  { button:"Add to cart", price:1000,title:"Beautiful GoldPlated Earings",image:"https://tse4.mm.bing.net/th?id=OIP.RCbOjS5Cv4PuTG5A9KtA2gHaHa&pid=Api&P=0&w=159&h=159"}
]
console.log(data)
  return (
    <div className='Card-s'>
    {data.map((product,i)=>(
      <ChildCards button={product.button} price={product.price} title={product.title} image={product.image} key={i} />
    ))}

    </div>
  )
}

export default ParentCards