import React,{useState} from 'react'

function UseStateHookPractice() {
    const [count , setCount] = useState(0);
    const increament = ()=>{
        setCount(count +1);
        if(count >=10){
            setCount(0);
        }}
        const decrease = ()=>{
            setCount(count -1);
            if(count <=0){
                setCount(0);
            }
        }
    
  return (
    <div>Hello useState :  {count}
    <button onClick={increament}> plus</button>
    <button onClick={decrease}>Minus</button>

    </div>
  )
}

export default UseStateHookPractice