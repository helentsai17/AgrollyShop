import React, { Component } from 'react';
import axios from 'axios';
import Card from './chatbox'
import { Link } from "react-router-dom";
import askquestion from './askquestion/askquestion';
import Dialog from '../layout/Dialog'



export default class DisplayChat extends Component {

    constructor(props) {
        super(props);

        this.state = {
            chats: [],
            country: "Brazil",
            isOpen: false
        }
    }


    componentDidMount() {
        axios.get('http://agrolly.tech/forum2.php')
            .then(response => {
                console.log(response.data)
                const chatinfo = response.data;
                this.setState({ chats: chatinfo });
            })
            .catch(error => {
                console.log(error)
            })
    }

    ChatList() {
        let countryfiler = this.state.chats.filter(
            (countries) => {
                console.log(countries.country == 'Brazil')
                return countries.country === this.state.country
            }
        )

        return countryfiler.map(currentchat => {
            return <Card key={currentchat.id} chat={currentchat} />
        });
    }

    render() {


        return (
            <div style={{ "margin": "3% 20%" }} >

                {/* <button className="btn btn-primary" onClick={(e) => this.setState({ isOpen: true })}>here</button>
                <askquestion isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
                    <textarea className="form-control"></textarea>
                </askquestion> */}

                <div>{this.ChatList()}</div>
            </div>
        )
    }
}
