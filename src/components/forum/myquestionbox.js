import React, { useState } from 'react';
import Answerbox from './AnswertoQuestionbox'
import style from './myquestionpage.module.css'


function MyQuestionCard(props) {
    const [answer, setAnswer] = useState([]);



    return (
        <div >
            <div className={style.myQuestionCardstyle}>
                <p className={style.questiontext} >{props.question.question}</p>
                <img src={props.question.source} alt="" />
                <p className={style.questiontime}>{props.question.date}</p>
                <hr />
                <Answerbox key={props.question.date} questionid={props.question.id}></Answerbox>
            </div>
        </div>
    )
}

export default MyQuestionCard;