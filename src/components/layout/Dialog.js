import React, { Component } from 'react'

let dialogStyle = {
    width: '500px',
    maxWidth: "100%",
    margin: '0 auto',
    position: "fixed",
    left: "50%",
    top: '50%',
    transform: "translate(-50%,-50%)",
    zIndex: '999',
    backgroundColor:"#eee",
    background: '10px 20px 40px',
    borderRadius: "8px",
    display: "flex",
    fixDirection: "column",
    textAlign : "left",
    padding:"10px"
}

let dialogCloseButtonStyles ={
    marginBottom : '15px',
    padding: '3px 8px',
    cursor:'pointer',
    borderRadius:"50%",
    border:"none",
    width:'30px',
    height:'30px',
    fontWeight:'bold',
    alignSelf:'fiex-end'
}

class Dialog extends Component {

    render() {
        let dialog = (
            <div style={dialogStyle}>
                <button style={dialogCloseButtonStyles} onClick = {this.props.onClose}>x</button>
                <div >{this.props.children}</div>
            </div>
        )
        
        if(! this.props.isOpen){
            dialog = null;
        }

        return (
           <div>
               {dialog}
           </div>
        )
    }
}

export default Dialog