import React, { useState } from 'react'
import { ProgressBar } from 'react-bootstrap';

function UseStatetwo() {
    const[count, setCount] = useState(0);
    const clock =()=>{
        setCount(count +10);
    if (count >=100) {
        setCount(0);
    }

    }
  return (
    <div>
    <ProgressBar now={count} label={`${count}%`}/>
    <button onClick={clock}>ClickMe</button>
    
    </div>
  )
}

export default UseStatetwo