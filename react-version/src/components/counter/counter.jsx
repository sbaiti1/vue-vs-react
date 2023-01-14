import { useState } from "react"
import { Link } from "react-router-dom"

export default function Counter(){
    const [count, setCount] = useState(0)
  const add = ()=>{
  setCount(prev => prev + 1 )
 }
    return(
       <>
        <Link to="/">back to home</Link>

       <h1>hello world , i am a counter</h1>
          <p> {count} </p>
          <button onClick={add} >add</button>
           
       </>
    )
}