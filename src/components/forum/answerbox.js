import React from 'react';

let forumCard = {
    maxWidth: "100%",
    backgroundColor: "#eee",
    margin: "10px",
    padding: "10px"
}


function ChatCard(props) {
    var token = localStorage.getItem('usertoken');
    var localdata = JSON.parse(token);

    let buttondisplay = (
        <div>
            <button onClick={() => props.deleteComment(props.answer.cid)}>delete</button>
        </div>
    )
    if(localdata.user_id != props.answer.user_id){
        buttondisplay = null ;
    }

    return (
        <div style={forumCard}>
            {buttondisplay}
            <p>{props.answer.text}</p>
            <div>
                <p style={{ "color": "blue" }}>{props.answer.name}</p>
                <p>{props.answer.date}</p>
            </div>
            <img src={props.answer.image} alt="" />
        </div>
    )
}

export default ChatCard;