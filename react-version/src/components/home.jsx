import { Link } from "react-router-dom"
export default function Home(){
    return(
        <>
            
            <h1>welcome the react version</h1>
            <h2> <Link to="/counter">basic example of counter</Link> </h2>
            <h2> <Link to="/todo" > example of a simple to do list</Link> </h2>
            <h2> <Link to="/api">How to consume using fetch and axios</Link> </h2>
        </>
    )
}