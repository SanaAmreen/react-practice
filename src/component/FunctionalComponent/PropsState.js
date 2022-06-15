import React from 'react'

function PropsState() {
    const user=[{name:"sana", age:25, Q:"B.E"}]
    

  
  return (
    <div>
{user&&user.map((prod)=>{
    return
    <h1> name={prod.name} age={prod.age}</h1>})}

   
    </div>
  )
}

export default PropsState