import React from 'react';


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
            <div className="alert-size">
                <a href="#" onClick={this.dismiss}>
                    {message}
                    {/* {message.body} */}
                </a>
            </div>
        )
    }
}

export default Alerts;