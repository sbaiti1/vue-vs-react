import { useEffect, useState } from "react"
import Card from "./card"
export default function Users(){
    const [data , setData] = useState([])
    const handleData = ()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res=>res.json())
            .then(result =>setData(result))
    }
    useEffect(()=>{handleData()} , [])
    return(
        <>
            <h1>List of users</h1>
            <h4> Total : {data.length} </h4>
            {data.map(user=> <Card key={user.id} {...user} />)}
        </>
    )
}