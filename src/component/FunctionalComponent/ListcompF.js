import React from 'react'

function ListcompF() {
    const data = ["sana", 28, "engineer"]
    const newData = [data.map(function(data){ return <li>{data}</li>})]
  return (
    <div>
    <ul>
   {newData}
    </ul>
    </div>
  )
}

export default ListcompF