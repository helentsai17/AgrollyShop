import React from 'react';


function MyQuestionCard(props) {
    return (
        <div >   
                <p>{props.question.text}</p>
                <p>{props.question.date}</p>

        </div>
    )
}

export default MyQuestionCard;