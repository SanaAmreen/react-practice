import React, { useState } from 'react'

function ColorsState() {
    const[color, setColor] = useState("")
    
    const changeColor=()=>{
       setColor('yellow')
        if(color === "yellow"){
            setColor ( "blue")
        }else if(color === "blue" ){
            setColor ("pink")
        }else if( color === "pink"){
            setColor ( "black")
        }
    }
  return (
    <div>
    <h3 style={{color : color}}> MY color Book</h3>
    <button onClick={changeColor}>ClickMine</button>
    </div>
  )
}

export default ColorsState