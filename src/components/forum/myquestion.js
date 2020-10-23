import React, { Component } from 'react';
import axios from 'axios';
import QuestionCard from './myquestionbox'
import style from './myquestionpage.module.css'


export default class MyQuestion extends Component {

    constructor(props) {
        super(props);

        this.state = {
            question: [],
            uid: ''
        }
    }


    componentDidMount() {
        var token = localStorage.getItem('usertoken');
        var localdata = JSON.parse(token)
        // console.log(localdata.user_id);

        var useridinput = {
            uid: localdata.user_id
        }

        axios.post('http://agrolly.tech/myquestions.php', useridinput, {
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            }
        }).then(response => {
            const questionIask = response.data;
            // console.log(questionIask)
            this.setState({ question: questionIask });

        })


    }

    MyQuestionList() {

        return this.state.question.map((currentqustion, index) => {
            console.log(currentqustion)
            if(currentqustion.date !== undefined){
                return <QuestionCard key={index} question={currentqustion} />
            }
            
        });
    }

    render() {

        return (
            <div className={style.background}>
                <div className={style.edge}>
                    
                        <div>{this.MyQuestionList()}</div>
                    
                </div>
            </div>
        )
    }
}
