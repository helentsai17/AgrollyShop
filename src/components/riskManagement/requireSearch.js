import React, { Component } from 'react';
import axios from 'axios'

export default class requireSearch extends Component {

    constructor(props) {
        super(props);

        this.OnChnageCity = this.OnChnageCity.bind(this)
        this.OnChnageMonth = this.OnChnageMonth.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            city: '',
            month: '',
            allcity:[],
            po_place:''
        }

    }

    componentDidMount() {
        
        axios.get('http://agrolly.tech/get_cities.php')
            .then(response => {
                const getcities = response.data
                this.setState({ allcity: getcities })
                

            }).catch((error) => {
                console.log("error from get cities: " + error)
            })
    }

    getCityCode() {
        this.state.allcity.map((currentcity) => {
            if (currentcity.City == this.state.city) {
                const currentcitypo = currentcity.po_place
                console.log(currentcitypo)
                this.setState({ po_place: currentcitypo })
            }
        })
        // this.getLong();
    }

    OnChnageMonth(e) {
        this.setState({
            month: e.target.value
        })

    }

    OnChnageCity(e) {
        this.setState({
            city: e.target.value
        })
        this.getCityCode();
    }

    

    onSubmit(e) {
        e.preventDefault();
        this.getCityCode();
        console.log(this.state.month)
        console.log(this.state.city)
        //have to fix here the valuse dose not get in ontime
        console.log(this.state.po_place)

    }


    render() {
        return (
            <div>
            <form onSubmit={this.onSubmit} >
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputTime">Month</label>
                        </div>
                        <select className="custom-select" id="inputTime" value={this.state.month} onChange={this.OnChnageMonth}>
                            <option selected>Choose...</option>
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">Auguest</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputCity">City</label>
                        </div>
                        <select className="custom-select" id="inputCity" value={this.state.city} onChange={this.OnChnageCity}>
                            <option selected>Choose...</option>
                            {this.state.allcity.map((allcity) => { return <option value={allcity.City}>{allcity.City}</option> })}
                        </select>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="search"
                            className="btn btn-primary" />
                    </div>
                </form>
                
            </div>
        )
    }
}