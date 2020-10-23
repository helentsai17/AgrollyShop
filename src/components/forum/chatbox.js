import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import style from './chatboxstyle.module.css'


let forumCard = {
    maxWidth: "100%",
    backgroundColor: "#eee",
    margin: "10px",
    padding: "10px"
}
let questiontext = {
    fontWeight: '700',
    fontSize: "20px"
}

function ChatCard(props) {
    const [userID, setuserID] = useState('');
    // function checkID() {
    // console.log(props.chat.id)
    axios.get('http://agrolly.tech/quesComm.php?what=comment&id=' + props.chat.id)
        .then(res => {
            const chatanwer = res.data[0].user_id
            setuserID(chatanwer)

        }).catch((error) => {
            console.log("errow from chat room answer: " + error)
        })

    // }
    var token = localStorage.getItem('usertoken');
    var localdata = JSON.parse(token)
    let questiondelete = (

        <button onClick={() => props.deleteQuestion(props.chat.id)}>delete</button>
    )
    if (localdata.user_id !== userID) {
        console.log(userID)
        questiondelete = null
    }


    return (
        <div className = {style.myQuestionCardstyle}>
            {/* {checkID()} */}
            {questiondelete}
            <Link style={{"text-decoration": "none"}}  to={"/forum/joinchat/" + props.chat.id}>          
                <p className={style.questiontext}>{props.chat.question}</p>
                <p className={style.questionInfo} >{props.chat.name} | {props.chat.state} |{props.chat.date}</p>     
            </Link>
        </div>
    )
}

export default ChatCard;