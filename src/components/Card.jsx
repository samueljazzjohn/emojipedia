import React from "react"
import EmojiDetails from "../Emoji";


function content(EmojiDetail){
    return(
        <div className="card-body">
            <div className="emoji">
                <img src={EmojiDetail.emoji} alt="emoji pic" />
            </div>
            
             <dt key={EmojiDetail.id.toString()}>{EmojiDetail.name}</dt>
             <p className="content">{EmojiDetail.details}</p>
        </div>
    )
}

function Card(){
    return(
        <div className="body">
            <dl>
                {EmojiDetails.map(content)}
            </dl>
        </div>
    );
}

export default Card;