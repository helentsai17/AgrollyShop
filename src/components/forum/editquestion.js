import React, { Component } from 'react';
import axios from 'axios';
import Card from './answerbox'
import style from './chatboxstyle.module.css'
import { Link } from 'react-router-dom';


export default class editquestion extends Component {



    constructor(props) {
        super(props);
        this.onChangeAnswertext = this.onChangeAnswertext.bind(this)
        this.onChangequestion = this.onChangequestion.bind(this)
        this.questionupdate = this.questionupdate.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            user_id: '',
            name: '',
            question: '',
            date: '',
            image: '',
            country: '',
            state: '',
            answer: [],
            answertext: '',
            uploadimage: "NaI"
        }
    }


    componentDidMount() {
        axios.get('http://agrolly.tech/quesComm.php?what=question&id=' + this.props.match.params.id)
            .then(response => {
                const responsechat = response.data[0]
                this.setState({
                    user_id: responsechat.user_id,
                    name: responsechat.name,
                    question: responsechat.question,
                    date: responsechat.date,
                    image: responsechat.image,
                    country: responsechat.country,
                    state: responsechat.state,
                })
            }).catch((error) => {
                console.log("errow from chat room question: " + error)
            })

        axios.get('http://agrolly.tech/quesComm.php?what=comment&id=' + this.props.match.params.id)
            .then(response => {
                const chatanwer = response.data;
                console.log(chatanwer)
                this.setState({ answer: chatanwer });
            }).catch((error) => {
                console.log("errow from chat room answer: " + error)
            })

    }

    onChangeAnswertext(e) {
        this.setState({
            answertext: e.target.value
        });
    }

    onChangequestion(e) {
        this.setState({
            question: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();
        var token = localStorage.getItem('usertoken');
        var localdata = JSON.parse(token)

        const answerquestion = {
            name: localdata.name,
            qid: this.props.match.params.id,
            uid: localdata.user_id,
            filename: this.state.uploadimage,
            text: this.state.answertext,
        }

        // console.log(answerquestion)

        axios
            .post('http://agrolly.tech/postAnswer.php', answerquestion, {
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded'
                }
            })
            .then(response => {
                console.log(response.data)
                window.location.reload();
            })
            .catch(err => {
                console.log(err)
            })
    }

    questionupdate(e){
        e.preventDefault();
        var token = localStorage.getItem('usertoken');
        var localdata = JSON.parse(token)

        const updatequestion = {
            uid:localdata.user_id,
            uqid: this.props.match.params.id,
            uquestion:this.state.question
        }
        console.log(updatequestion)

        axios
        .post('http://agrolly.tech/updatequestion.php', updatequestion, {
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response => {
            console.log(response.data)
            window.location = "/forum/joinchat/"+this.props.match.params.id
        })
        .catch(err => {
            console.log(err)
        })
    }


    chatanwerList() {
        return this.state.answer.map(currentanswer => {
            return <Card key={currentanswer.date} deleteComment={this.deleteComment} answer={currentanswer} />
        });
    }

    deleteComment(id) {
        const deletC = {
            what: "comment",
            cid: id
        }

        axios
            .post('http://agrolly.tech/deletePost.php', deletC, {
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded'
                }
            })
            .then(response => {
                console.log(response.data)
                window.location.reload();
            })
            .catch(err => {
                console.log(err)
            })
    }



    render() {
        return (

            <div className={style.answerdisplay}>
                <form onSubmit={this.questionupdate}>
                    <div className="form-group">
                        <textarea type="text" className="form-control"
                            value={this.state.question}
                            onChange={this.onChangequestion} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="edit"
                            className="btn btn-primary" />   
                    </div>
                    
                </form>
                <p>{this.state.name}</p>
                <p>{this.state.state} ,{this.state.country}</p>
                <p>{this.state.date}</p>

                <hr />
                <form onSubmit={this.onSubmit} >

                    <div className="form-group">
                        <textarea type="text" className="form-control"
                            placeholder="you know the answer? answer it here"
                            value={this.state.answertext}
                            onChange={this.onChangeAnswertext} />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="submit"
                            className="btn btn-primary" />
                    </div>

                </form>

                {this.chatanwerList()}
            </div>
        )


    }
}
