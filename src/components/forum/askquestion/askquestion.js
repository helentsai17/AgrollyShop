import React, { Component } from 'react';
import axios from 'axios';
import style from '../chatboxstyle.module.css'



export default class askquestion extends Component {
    constructor(props) {
        super(props);

        this.onChangeQuestion = this.onChangeQuestion.bind(this)
        this.onChangepostFile = this.onChangepostFile.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            postname: "",
            postquestion: "",
            postuid: "",
            postFile: "",
        }
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
                console.log(response.data)

            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        // let askquestion = (
        //     <div className={style.askquestionbox}>
        //         <button onClick = {this.props.onClose}>x</button>
        //         <form onSubmit={this.onSubmit} >
        //             <textarea name="" id="" cols="30" rows="10"
        //                 className="form-control"
        //                 value={this.state.postquestion}
        //                 onChange={this.onChangeEmail}></textarea>
                
        //         <div className="form-group">
        //             <input type="submit" value="question sent"
        //                 className="btn btn-primary" />
        //         </div>
        //         </form>
        //         <div >{this.props.children}</div>
        //     </div>
        // )

        // if(! this.props.isOpen){
        //     askquestion = null;
        // }

        let dialog = (
            <div className={style.askquestionbox}>
                <button onClick = {this.props.onClose}>x</button>
                <div >{this.props.children}</div>
            </div>
        )
        
        if(! this.props.isOpen){
            dialog = null;
        }

        return (
            <div className = {style.askquestionbox}>
            {dialog}
                
            </div>
        )

    }

}

