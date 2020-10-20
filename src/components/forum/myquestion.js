import React, { Component } from 'react';
import axios from 'axios';
import Card from './myquestionbox'

export default class MyQuestion extends Component {

    constructor(props) {
        super(props);

        this.state = {
            question: [],
        }
    }


    componentDidMount() {
        var token = localStorage.getItem('usertoken');
        var localdata = JSON.parse(token)

        // axios.get('http://agrolly.tech/quesComm.php?what=comment&id='+localdata.user_id)
        axios.get('http://agrolly.tech/quesComm.php?what=comment&id='+1)
            .then(response => {
                const questioninfo = response.data;
                console.log(questioninfo)
                this.setState({ question: questioninfo });
            })
            .catch(error => {
                console.log(error)
            })
    }

    MyQuestionList() {
        
        return this.state.question.map(currentqustion => {
            return <Card key={currentqustion.cid} question={currentqustion} />
        });
    }

    render() {


        return (
            <div >
                <div>{this.MyQuestionList()}</div>
            </div>
        )
    }
}
