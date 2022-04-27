import React from "react"


function Card(props){
    return(
    <div className="card-body">
        <div className="emoji">
            <img src={props.emoji} alt="emoji pic" />
        </div>
        
         <dt align="center">{props.name}</dt>
         <p align="center" className="content">{props.details}</p>
    </div>
    );
}

export default Card;