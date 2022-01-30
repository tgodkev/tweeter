


function Card(props){
    return(
        <div className="card">
           
           <div> {props.name}</div>
            <div>{props.message}</div>
            
        </div>
    )
}


export default Card;