import React, { Component } from 'react';
import axios from 'axios'
import VegetablesCard from './vegetableCard'




export default class riskpage extends Component {

    constructor(props) {
        super(props);
        var token = localStorage.getItem('usertoken');
        var localdata = JSON.parse(token)

        this.OnChnageCity = this.OnChnageCity.bind(this)
        this.OnChnageMonth = this.OnChnageMonth.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {         
            city:'',
            month:'',
            vegetables:[],
            allcity:[],
            po_place:'',
            allcityLong:[],
            citydata:[]
        }
       
    }

    componentDidMount(){
        //get city
        var token = localStorage.getItem('usertoken');
        var localdata = JSON.parse(token)
        this.setState({city:localdata.city})

        axios.get('http://agrolly.tech/get_cities.php')
            .then(response => {
                const getcities = response.data
                this.setState({ allcity: getcities }) 
                this.getCityCode();
                
            }).catch((error) => {
                console.log("error from get cities: " + error)
            })

        //get crop detail
        axios.get('http://www.agrolly.tech/crop_list.php')
            .then(res =>{
                // console.log(res.data)
                const vegetables = res.data
                this.setState({vegetables : vegetables})
            })
            .catch(error =>{
                console.log('error come from get crop api: '+error)
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
        this.getLong();
    }

    getLong(){
        axios.get('http://www.agrolly.tech/po_value.php')
        .then(res =>{
            console.log(res.data)
            const po = res.data
            this.setState({allcityLong:po})
            this.findcityLong()
        }).catch(error =>{
            console.log(error)
        })
    }

    findcityLong(){
        const long = this.state.po_place.slice(2)
        return this.state.allcityLong.filter(citylong =>{
            if( citylong.city_long === long){
                console.log(citylong)
                this.setState({citydata:citylong})
            }
        })
    }

    vegetablesList(){
        return this.state.vegetables.map(vege =>{
            return <VegetablesCard key={vege.Order} vege={vege} mathdata={this.state.citydata}/>
        })
    }


    OnChnageMonth(e){
        this.setState({
            month:e.target.value
        })
    }

    OnChnageCity(e) {
        this.setState({
            city: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state.month)
        console.log(this.state.city)

    }
    render() {
        return (
            <div>
                {/* <form onSubmit={this.onSubmit} >
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputTime">Month</label>
                        </div>
                        <select className="custom-select" id="inputTime" value={this.state.month} onChange={this.OnChnageMonth}>
                            <option selected>Choose...</option>
                            {this.state.MonthinYear.map((month) => { return <option value={month}>{month}</option> })}
                        </select>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputCity">City</label>
                        </div>
                        <select className="custom-select" id="inputCity" value={this.state.city} onChange={this.OnChnageCity}>
                            <option selected>Choose...</option>
                            {this.state.getcitiescode.map((allcity) => { return <option value={allcity.City}>{allcity.City}</option> })}
                        </select>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="search"
                            className="btn btn-primary" />
                    </div>
                </form> */}
                {this.vegetablesList()}
                
            </div>
        )
    }
}