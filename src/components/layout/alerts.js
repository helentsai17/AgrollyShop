import React from 'react';

let alertsbox ={
    // border:"none",
    textAlign: "left",
    // borderStyle: "solid",
    // borderRadius: "5px",
    // borderColor: "rgb(32,178,170,0.8)",
    // backgroundColor: "rgb(32,178,170,0.8)",
    // fixDirection: "column",
    // paddingTop:"6px",
    margin:"5px",
    paddingLeft:"10px",
    backgroundColor:"#2196F3",
    color: "white"
}

export class Alerts extends React.PureComponent {

    dismiss = (e) => {
        e.preventDefault()
        const { onDismiss } = this.props

        if (onDismiss) onDismiss()
    }

    render() {
        const { message } = this.props

        if (!message) return null

        return (
            <div style = {alertsbox} >
                <p href="#" >
                    {message}
                    {/* {message.body} */}
                </p>
            </div>
        )
    }
}

export default Alerts;