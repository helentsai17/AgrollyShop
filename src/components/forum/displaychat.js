import React, { Component } from 'react';
import axios from 'axios';
import Card from './chatbox'
import { Link } from "react-router-dom";
import askquestion from './askquestion/askquestion';
import Dialog from '../layout/Dialog'
import style from './chatboxstyle.module.css'


export default class DisplayChat extends Component {

    constructor(props) {
        super(props);

        this.onChangeQuestion = this.onChangeQuestion.bind(this)
        this.onChangepostFile = this.onChangepostFile.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            chats: [],
            country: "Brazil",
            isOpen: false,
            //this is for asking question 
            postname: "",
            postquestion: "",
            postuid: "",
            postFile: "NaI",
        }
    }


    componentDidMount() {
        axios.get('http://agrolly.tech/forum2.php')
            .then(response => {
                // console.log(response.data)
                const chatinfo = response.data;
                this.setState({ chats: chatinfo });
            })
            .catch(error => {
                console.log(error)
            })
    }

    onChangeQuestion(e) {
        this.setState({
            postquestion: e.target.value
        })
    }


    onChangepostFile(e) {
        this.setState({
            postFile: e.target.value
        })
    }

    ChatList() {
        let countryfiler = this.state.chats.filter(
            (countries) => {
                // console.log(countries.country == 'Brazil')
                return countries.country === this.state.country
            }
        )

        return countryfiler.map(currentchat => {
            return <Card key={currentchat.id} chat={currentchat} deleteQuestion={this.deleteQuestion}/>
        });
    }

    deleteQuestion(id) {
        const deletC = {
            what: "question",
            qid: id
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

    onSubmit(e) {
        e.preventDefault();
        var token = localStorage.getItem('usertoken');
        var localdata = JSON.parse(token)

        const askquestion = {
            postname: localdata.name,
            postquestion: this.state.postquestion,
            postuid: localdata.user_id,
            postFile: this.state.postFile,
        }

        console.log(askquestion)

        axios
            .post('http://agrolly.tech/submitquestion.php', askquestion, {
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded'
                }
            })
            .then(response => {
                // console.log(response.data)
                window.location.reload();
            })
            .catch(err => {
                console.log(err)
            })
    }


    render() {


        return (
            <div className ={style.background} >
                <div className = {style.edge}>
                <div>
                    <form onSubmit={this.onSubmit} >
                        <textarea rows="5" className="form-control"
                            value={this.state.postquestion}
                            onChange={this.onChangeQuestion}></textarea>
                        

                        <div className="form-group">
                            <input type="submit" value="question sent"
                                className="btn btn-primary" />
                        </div>
                    </form>

                </div>

                {/* <button className="btn btn-primary" onClick={(e) => this.setState({ isOpen: true })}>here</button>
                <askquestion isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
                    <textarea className="form-control"></textarea>
                </askquestion> */}

                <div>{this.ChatList()}</div>
                </div>
            </div>
        )
    }
}