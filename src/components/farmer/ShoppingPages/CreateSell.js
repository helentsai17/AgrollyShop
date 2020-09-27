import React, { Component } from 'react';
// import axios from 'axios';



export default class cropCreate extends Component {


    constructor() {
        super();
        this.onChangeItemId = this.onChangeItemId.bind(this);
        this.onChangeFid = this.onChangeFid.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePicture = this.onChangePicture.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            item_id: '',
            fid: '',
            item_name: '',
            item_price: '',
            item_description: '',
            item_picture: ''
        }
    }

    onChangeItemId(e) {
        this.setState({
            item_id: e.target.value
        });
    }
    onChangeFid(e) {
        this.setState({
            fid: e.target.value
        });
    }
    onChangeName(e) {
        this.setState({
            item_name: e.target.value
        });
    }
    onChangePrice(e) {
        this.setState({
            item_price: e.target.value
        });
    }
    onChangeDescription(e) {
        this.setState({
            item_description: e.target.value
        });
    }
    onChangePicture(e) {
        this.setState({
            item_picture: e.target.value
        });
    }


    handleSubmit(event) {
        event.preventDefault();
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Item Name:</label>
                        <input className="form-control" type="text" value={this.state.item_name} onChange={this.onChangeName} />

                    </div>
                    <div className="form-group">
                        <label>Item Price:</label>
                        <input className="form-control" type="text" value={this.state.item_price} onChange={this.onChangePrice} />
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input className="form-control" type="text" value={this.state.item_description} onChange={this.onChangeDescription} />

                    </div>
                    <div className="form-group">
                        <label>item image:</label>
                        <div>
                        <input type="file" value={this.state.item_picture} onChange={this.onChangePicture} />
                        </div>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}