import React, {useState} from 'react';
import Answerbox from './AnswertoQuestionbox'


function MyQuestionCard(props) {
    const [answer, setAnswer] = useState([]);


    
    return (
        <div >   
                <p>{props.question.question}</p>
                <p>{props.question.date}</p>
                <Answerbox key={props.question.date}  questionid={props.question.id}></Answerbox>
        </div>
    )
}

export default MyQuestionCard;