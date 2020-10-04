import React, { Component } from 'react';
import {withGoogleMap,withScriptjs,GoogleMap,Marker,InfoWindow} from 'react-google-maps'
import Card from "./farmerCard"
import style from './Shopping.module.css'

function Map() {
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 40.712776, lng: -74.005974 }}
        />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default class shopper extends Component {


    render() {
        return (
            <div className={style.row}>
                <div className={style.column}>
                    <div className = {style.row}>
                    <Card imageurl = {'https://media1.s-nbcnews.com/j/newscms/2019_43/3070171/191025-mai-nguyen-mn-1515_04864e465a3357cce780b4f0b1f4dec8.fit-1120w.jpg'} farmerName ={'Ernst Götsch'}/>
                    <Card imageurl = {"https://media2.s-nbcnews.com/j/newscms/2019_43/3070091/191025-ariana-de-lena-asian-america-farms_e3e638462e1a4209480c3784aa270eed.fit-2000w.jpg"} farmerName ={'Rogério Vian'}/>
                    <Card imageurl = {"https://i.guim.co.uk/img/media/f0d3bc160d74c26ee586fdba6dc9fdc997d9d63b/0_280_4200_2520/master/4200.jpg?width=620&quality=85&auto=format&fit=max&s=97c22cefa7a03b75cbc8455c74ca59c8"}  farmerName ={'João Laet'}/>
                    
                    </div>
                </div>
                <div className={style.column} style={{ "width": "50vw", "height": "50vw" }}>
                    <WrappedMap
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
                        libraries=geometry,drawing,places&key=AIzaSyBtt87hwxupuQrI34odN8fVwfflL_tRxyU`}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `100%` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
            </div>
        )
    }
}
