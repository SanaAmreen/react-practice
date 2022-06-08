import React from 'react'

function PropsChild(props) {
  return (
    <div>
      <h1>Name:{props.name}</h1>
      <h2>Age:{props.age}</h2>
      <p>Address:{props.add}</p>
    </div>
  )
}

export default PropsChild
