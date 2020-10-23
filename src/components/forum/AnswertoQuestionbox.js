import React, { Component } from 'react';
import axios from 'axios';
import AnswerCard from './myanswerbox'

export default class DisplayChat extends Component {

    constructor(props) {
        super(props);
        
        this.state ={
            answerarry:[],
            questionID:this.props.questionid
        }
        
    }


    componentDidMount() {
        axios.get('http://agrolly.tech/quesComm.php?what=comment&id='+this.state.questionID)
        .then(response =>{
             const answerdata = response.data
            //  console.log(answerdata
             this.setState({answerarry:answerdata})
        })
    }

    AnswerList() {

        return this.state.answerarry.map(currentanswer => {
            // console.log(currentanswer.id)
            if(currentanswer.date !== undefined){
            return <AnswerCard key={currentanswer.date} answer={currentanswer} />
        }
        });
    }
    

    
    render() {


        return (
            <div >
                   <div>{this.AnswerList()}</div>
            </div>
        )
    }
}
