import React from 'react';

let forumCard = {
    maxWidth: "100%",
    backgroundColor:"#eee",
    margin:"10px",
    padding:"10px"
}


function ChatCard(props) {
    return (
        <div style={forumCard}>
            <p>{props.answer.text}</p>
            <div>
            <p style={{"color":"blue"}}>{props.answer.name}</p>
            <p>{props.answer.date}</p>
            </div>
            <img src={props.answer.image} alt=""/>
        </div>
    )
}

export default ChatCard;