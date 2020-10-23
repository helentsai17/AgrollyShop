import React from 'react';
import style from './myquestionpage.module.css'
import { useState } from 'react';



function myAnswerBox(props) {
    // const [nameCap, setNameCap] = useState('');
    //    function slicename(){
    const nameC = props.answer.name.substring(0, 1)

    // setNameCap(nameCap)
    //    }
    return (
        <div style={{"display": "inline"}}>
            <span className = {style.nametag}>{nameC}</span>
            <div className={style.myanswer}>
                <p>{props.answer.text}</p>
                
                <p className={style.questiontime}>{props.answer.date}</p>
                {/* <p>{props.answer.name}</p> */}
            </div>
        </div>
    )
}

export default myAnswerBox;