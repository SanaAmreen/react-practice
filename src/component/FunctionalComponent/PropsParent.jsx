import React from 'react'
import PropsChild from './PropsChild'

function PropsParent() {
  return (
    <div>
    <PropsChild name={"sana"} age={25} add={"pune"}/>
    <PropsChild name={"shoeb"} age={23} add={"nanded"}/>

    </div>
  )
}

export default PropsParent