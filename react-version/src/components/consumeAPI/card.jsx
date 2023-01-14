

export default function Card(props){

    return(
        <>
        <hr />
            <p> name : {props.name} </p>
            <p> email : {props.email} </p>
            <p> phone : {props.phone} </p>
            <p> website : {props.website} </p>
        </>
    )
}