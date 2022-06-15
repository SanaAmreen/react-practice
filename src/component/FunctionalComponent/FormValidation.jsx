import React, { useEffect, useState } from 'react'

function FormValidation() {
    const [name , setName] = useState("");
    const [number, setNumber] = useState("");
  


 const handleSubmit = ()=>{
    
 }

    const handleName =(e)=>{
        e.preventDefault();
        setName(e.target.value)
        
    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <label>Name :</label>
    <input type="text" placeholder='Enter your name' onChange={handleName} value={name} />
    <label>Number :</label>
    <input type="number" placeholder='Enter your Number'onChange={(e)=>setNumber(e.target.value)}  value={number} />
    <button> SUbmit</button>
    </form>
    </div>
  )
}

export default FormValidation