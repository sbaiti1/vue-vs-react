
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
export default function Todo(){


    const [id , setID] = useState(1)
    const [tasks , setTask] = useState({newTask : {id : null, value : ""} , all : []})
    
    const handleChane = (e)=>{
        setTask(prev => ({...prev , newTask : { ...prev.newTask, value : e.target.value}}))
    }
    const addTask = (e)=>{
        e.preventDefault();
        setTask(prev=> ({...prev , all : [...prev.all , {id , value : tasks.newTask.value}]}))
        setID(prev =>prev+1)
    }
    const style = {color : "red"}

    return(
        <>
            <Link to="/">back to home</Link>

            <h1>add a task</h1>
            <form action="" onSubmit={addTask}>
            <input type="text" value={tasks.newTask.value} onChange={handleChane} />

            </form>
            <br />
            <button onClick={addTask} >add</button>
            <br />
            
            <ul>
                
                {tasks.all.map(task => <li key={task.id}> {task.id} - {task.value}</li>)}
            </ul>
            
        </>
    )
}