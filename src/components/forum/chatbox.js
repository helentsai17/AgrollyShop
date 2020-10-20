import React from 'react';

import { Link } from 'react-router-dom';

let forumCard = {
    maxWidth: "100%",
    backgroundColor:"#eee",
    margin:"10px",
    padding:"10px"
}
let questiontext = {
    fontWeight: '700',
    fontSize:"20px"
}

function ChatCard(props) {
    return (
        <div style={forumCard}>
            <Link to={"/forum/joinchat/" + props.chat.id}>
                <p style={questiontext}>{props.chat.question}</p>
                <p>{props.chat.name}</p>
                <p>{props.chat.state}</p>
                <p>{props.chat.date}</p>
            </Link>
        </div>
    )
}

export default ChatCard;