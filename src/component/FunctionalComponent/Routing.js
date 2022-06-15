import React from 'react'
import { 
  BrowserRouter as Router,
Routes,
Route,
Link } from 'react-router-dom'

function Routing() {
  return (
    <div>
    <Router>
    
    
    <nav>
       <ul>
           <li>
           <Link to="/">Home</Link>
           </li>
           <li>
           <Link to="/friends">Friends</Link>
           </li>
           <li>
           <Link to="/contact">Contact</Link>
           </li>
       </ul>
    </nav>
    
    
    
    

    <Routes>
        <Route path='/friends' element={<Friends/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </Router>
    </div>
  )
}
function Home(){
  return <h1>Welcome to Home.</h1>
}
function Friends(){
  return <h2>My Friendlist is quit large.</h2>
}
function Contact(){
  return <h3>Feel free to contact me on this mail.
  Thank you.</h3>
}

export default Routing