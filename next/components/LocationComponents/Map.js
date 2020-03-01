import React from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import Autocomplete from 'react-google-autocomplete';
import pharmacyList from '../../data/pharmacyList';


import {Row, Col} from 'react-bootstrap';
import Pharmacies from '../LocationComponents/Pharmacies';


class MapContainer extends React.Component{
    constructor( props ){
        super( props );
        this.state = {
            pharmacyList: pharmacyList,
            center: {
                lat: 24.9298,
                lng: 67.1148
            },
            address: '',
            place: '',
        } 
    }



    onPlaceSelected = ( place ) => {
        // console.log("place: ", place);
        const address = place.formatted_address,
            latValue = place.geometry.location.lat(),
            lngValue = place.geometry.location.lng();
        // Set these values in the state.
        this.setState({
            address: ( address ) ? address : '',
            center: {
                lat: latValue,
                lng: lngValue
            }
        })
    }  

    render(){
        const {pharmacyList, center} = this.state;

        const style = {
            marginTop: '20px',
            width: '95%',
            height: '400px'
        }

        const icon={
            url: "https://library.kissclipart.com/20180829/se/kissclipart-pharmacy-shop-vector-transpirant-clipart-pharmacy-0789296e6bec205b.png",
            anchor: new google.maps.Point(32,32),
            scaledSize: new google.maps.Size(25,25)
        }

        let map;
        map = (
            <>
                {/* For Auto complete Search Box */}
                <Autocomplete
                    style={{
                        width: '100%',
                        height: '40px',
                        paddingLeft: '16px',
                        borderRadius: '10px',
                        boxShadow: '0 0',
                        marginTop: '10px',
                        marginBottom: '0px'
                    }}
                    onPlaceSelected={ this.onPlaceSelected }
                    types={['establishment']}
                    componentRestrictions={{country: "pk"}}
                />

                <Map 
                    google = {this.props.google}
                    style = {style}
                    initialCenter = {this.state.center}
                    center = {this.state.center}
                    zoom = {12}
                >
                {/* Displaying the pharmacies */}
                {
                    pharmacyList.map((pharmacy)=> {
                        return(
                            <Marker
                                key = {pharmacy.id}
                                position={{lat: pharmacy.lat, lng: pharmacy.lng}}
                                icon={icon} />
                        )
                    })
                }
                <Marker 
                    onClick={this.onMarkerClick}
                    position = {{lat: center.lat, lng: center.lng}}
                    name={'Current location'} 
                />
                </Map>
            </>
        )
        
        // return( map )
        return(
            <Row className = "second-row">
                <Col className = "map" lg = {8} md = {8} sm={12}>
                    <div style = {{margin: 20}}>
                        {map}
                    </div>
                </Col>
                <Col className = "pharmacy-list" lg = {4} md = {4} sm={12}>
                    <Pharmacies google = {this.props.google} currentLocation = {this.state.center} pharmacyList = {this.state.pharmacyList} />
                </Col>
            </Row>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDUtGLl70yxAlVHl08pOvTeTRyF5_vrglc"
  })(MapContainer)