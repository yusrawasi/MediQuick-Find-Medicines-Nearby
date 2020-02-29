import React from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from 'react-google-autocomplete';
import pharmacyList from '../../data/pharmacyList';


import {Row, Col} from 'react-bootstrap';
import Pharmacies from '../LocationComponents/Pharmacies';

Geocode.setApiKey("AIzaSyDUtGLl70yxAlVHl08pOvTeTRyF5_vrglc");

Geocode.enableDebug();

class Map extends React.Component{
    constructor( props ){
        super( props );
        this.state = {
            address: '',
            place: '',
            city: '',
            area: '',
            state: '',
            pharmacyList: pharmacyList,
            mapPosition: {
                lat: this.props.center.lat,
                lng: this.props.center.lng
            },
            markerPosition: {
                lat: 24.9298,
                lng: 67.1148
            }
        } 
    }
    /**
     * Get the current address from the default map position and set those values in the state
     */
    componentDidMount() {
        Geocode.fromLatLng( this.state.mapPosition.lat , this.state.mapPosition.lng ).then(
            response => {
                // console.log('res:', response);
                
                const address = response.results[0].formatted_address,
                place = response.results[0].address_components[0],
                addressArray =  response.results[0].address_components,
                city = this.getCity( addressArray ),
                area = this.getArea( addressArray ),
                state = this.getState( addressArray );
        
                // console.log( 'city', city, area, state );
            
                this.setState( {
                address: ( address ) ? address : '',
                place: ( place ) ? place : '',
                area: ( area ) ? area : '',
                city: ( city ) ? city : '',
                state: ( state ) ? state : '',
                })
            },
            error => {
                console.error(error);
            }
        );
    };

    /**
     * Component should only update ( meaning re-render ), when the user selects the address, or drags the pin
     *
     * @param nextProps
     * @param nextState
     * @return {boolean}
     */
    shouldComponentUpdate( nextProps, nextState ){
        if (
            this.state.markerPosition.lat !== this.props.center.lat ||
            this.state.address !== nextState.address ||
            this.state.city !== nextState.city ||
            this.state.area !== nextState.area ||
            this.state.state !== nextState.state
        ){
            return true
        } else if ( this.props.center.lat === nextProps.center.lat ){
            return false
        }
    }    
    /**
     * Get the city and set the city input value to the one selected
     *
     * @param addressArray
     * @return {string}
     */
    getCity = ( addressArray ) => {
        let city = '';
        for( let i = 0; i < addressArray.length; i++ ) {
            if ( addressArray[ i ].types[0] && 'administrative_area_level_2' === addressArray[ i ].types[0] ) {
                city = addressArray[ i ].long_name;
                return city;
            }
        }
    };

    /**
     * Get the area and set the area input value to the one selected
     *
     * @param addressArray
     * @return {string}
     */
    getArea = ( addressArray ) => {
        let area = '';
        for( let i = 0; i < addressArray.length; i++ ) {
            if ( addressArray[ i ].types[0]  ) {
                for ( let j = 0; j < addressArray[ i ].types.length; j++ ) {
                    if ( 'sublocality_level_1' === addressArray[ i ].types[j] || 'locality' === addressArray[ i ].types[j] ) {
                        area = addressArray[ i ].long_name;
                        return area;
                    }
                }
            }
        }
    };

    /**
     * Get the address and set the address input value to the one selected
     *
     * @param addressArray
     * @return {string}
     */
    getState = ( addressArray ) => {
        let state = '';
        for( let i = 0; i < addressArray.length; i++ ) {
            for( let i = 0; i < addressArray.length; i++ ) {
                if ( addressArray[ i ].types[0] && 'administrative_area_level_1' === addressArray[ i ].types[0] ) {
                    state = addressArray[ i ].long_name;
                    return state;
                }
            }
        }
    };

    /**
     * And function for city,state and address input
     * @param event
     */
    onChange = ( event ) => {
        this.setState({ [event.target.name]: event.target.value });
    };


    /**
     * When the user types an address in the search box
     * @param place
     */
    onPlaceSelected = ( place ) => {
        console.log("place: ", place);
        const address = place.formatted_address,
            addressArray =  place.address_components,
            city = this.getCity( addressArray ),
            area = this.getArea( addressArray ),
            state = this.getState( addressArray ),
            latValue = place.geometry.location.lat(),
            lngValue = place.geometry.location.lng();
        // Set these values in the state.
        this.setState({
            address: ( address ) ? address : '',
            area: ( area ) ? area : '',
            city: ( city ) ? city : '',
            state: ( state ) ? state : '',
            markerPosition: {
                lat: latValue,
                lng: lngValue
            },
            mapPosition: {
                lat: latValue,
                lng: lngValue
            },
        })
    }   

    render(){
        const {pharmacyList} = this.state;
        
        // console.log(this.props);

        const icon={
            url: "https://library.kissclipart.com/20180829/se/kissclipart-pharmacy-shop-vector-transpirant-clipart-pharmacy-0789296e6bec205b.png",
            scaledSize: { width: 25, height: 25 }
        }
        const AsyncMap = withScriptjs(
            withGoogleMap(props => (
                <GoogleMap google={this.props.google}
                    defaultZoom={this.props.zoom}
                    defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
                >
                    {/* For Auto complete Search Box */}
                    <Autocomplete
                        style={{
                            width: '100%',
                            height: '40px',
                            paddingLeft: '16px',
                            borderRadius: '10px',
                            boxShadow: '0 0',
                            marginTop: '10px'
                        }}
                        onPlaceSelected={ this.onPlaceSelected }
                        types={['establishment']}
                        componentRestrictions={{country: "pk"}}
                    />
                    {/* InfoWindow on top of marker */}
                    {this.state.markerPosition.lat !== null || this.state.markerPosition.lng !== null? (
                        <InfoWindow
                            onClose={this.onInfoWindowClose}
                            position={{ lat: ( this.state.markerPosition.lat + 0.0018 ), lng: this.state.markerPosition.lng }}
                        >
                            <div>
                                <span style={{ padding: 0, margin: 0 }}>{ this.state.address }</span>
                            </div>
                        </InfoWindow>
                    ): (
                       <></> 
                    )}
                   
                    {/*Marker*/}
                    {
                        pharmacyList.map(pharmacy => {
                            return (
                                <Marker
                                    key = {pharmacy.id}
                                    google = {this.props.google}
                                    draggable = {false}
                                    icon = {icon}
                                    position = {{lat: pharmacy.lat, lng: pharmacy.lng}}
                                />
                            )   
                        })
                    }
                    {this.state.markerPosition.lat !== null || this.state.markerPosition.lng !== null? (
                        <Marker google={this.props.google}
                            draggable={false}
                            // icon = {icon}
                            position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
                        />
                    ): (
                       <></> 
                    )}
                </GoogleMap>
            ))
        );

        let map;
        if( this.props.center.lat !== undefined ) {
            map = <div>
                    <div>
                        <div className="form-group">
                            {/* <label htmlFor="">Address</label> */}
                            <input type="text" name="address" className="form-control" onChange={ this.onChange } readOnly="readOnly" value={ this.state.address }/>
                        </div>
                    </div>
                    <AsyncMap
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDUtGLl70yxAlVHl08pOvTeTRyF5_vrglc&libraries=places"
                        loadingElement={
                            <div style={{ height: `100%` }} />
                        }
                        containerElement={
                            <div style={{ height: this.props.height }} />
                        }
                        mapElement={
                            <div style={{ height: `100%` }} />
                        }
                    />
            </div>
        } else {
            map = <div style={{height: this.props.height}} />
        }
        // return( map )
        return(
            <Row className = "second-row">
                <Col className = "map" lg = {8} md = {8} sm={12}>
                    <div style = {{margin: 20}}>
                        {map}
                    </div>
                </Col>
                <Col className = "pharmacy-list" lg = {4} md = {4} sm={12}>
                    <Pharmacies currentLocation = {this.state.markerPosition} pharmacyList = {this.state.pharmacyList} />
                </Col>
            </Row>
        )
    }
}

export default Map;