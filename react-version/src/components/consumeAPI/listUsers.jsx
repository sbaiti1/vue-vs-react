import { useEffect, useState } from "react"
import Card from "./card"
import axios from 'axios';
export default function Users(){
    const [Usersdata , setData] = useState([])
    const link = "https://jsonplaceholder.typicode.com/users"
    //using fetch
    const handleData = ()=>{
        fetch(link)
            .then(res=>res.json())
            .then(result =>setData(result))
    }

    //using Axios
    const handleData2 = async ()=>{
        try{
            const res = await axios.get(link)
            setData(res.data)
        }

        catch(err){console.log(err);}
    }
    useEffect(()=>{handleData2()} , [])
    return(
        <>
            <h1>List of users</h1>
            <h4> Total : {Usersdata.length} </h4>
            {Usersdata.map(user=> <Card key={user.id} {...user} />)}
        </>
    )
}