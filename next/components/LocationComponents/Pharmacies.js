//Displaying the list of pharmacies on the location page
import react from 'react';
import { List, Loader } from 'semantic-ui-react';
import {GoogleApiWrapper} from 'google-maps-react';
const GOOGLE_MAPS_API_KEY = "AIzaSyDUtGLl70yxAlVHl08pOvTeTRyF5_vrglc";

class Pharmacies extends react.Component{    
    
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            list: null,
            currentLocation: this.props.currentLocation
        }
    }

    componentDidMount(){
        console.log("component did mount");
        this.calculateDistances();
    }

    componentDidUpdate(prevProps) {
        console.log("this location ", this.props.currentLocation);
        console.log("previous location ", prevProps.currentLocation);
        if(!(this.props.currentLocation == prevProps.currentLocation)) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
        {
          this.calculateDistances();
        }
    }

    calculateDistances(){
        const {pharmacyList, currentLocation, google} = this.props;

        let latlngs = pharmacyList.map((pharmacy)=>{
            return {lat: pharmacy.lat, lng: pharmacy.lng}; 
        }); 

        let destinations = latlngs.map((item)=>{
            return new google.maps.LatLng(item.lat, item.lng);
        });

        console.log("destinations ", destinations);

        let origin = new google.maps.LatLng(currentLocation.lat, currentLocation.lng);
        let service = new google.maps.DistanceMatrixService();

        console.log("origin ", origin);
        console.log("service ", service);

        service.getDistanceMatrix({
            origins: [origin],
            destinations: destinations,
            travelMode: 'DRIVING'
        }, (res) => {
            console.log("response ", res);
            let list = pharmacyList.map((pharmacy, index)=>{
                return(
                    <List.Item key = {pharmacy.id}>
                        <List.Icon name='marker' size='large' verticalAlign='middle' />
                        <List.Content>
                            <List.Header as='a'>{pharmacy.name}</List.Header>
                            <List.Description as='a'>{res.rows[0].elements[index].distance.text}</List.Description>
                            <List.Description as='a'>{res.rows[0].elements[index].duration.text}</List.Description>
                        </List.Content>
                    </List.Item>
                )
            });
            this.setState({list: list, loading: false});
        });
    }
    

    render (){
        const { loading, list} = this.state;
        return(
            <List divided relaxed>
                <h1>Pharmacies</h1>
                {/* {this.state.list} */}
                {loading ? <Loader size='massive' active inline='centered' /> : list}
            </List>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: (GOOGLE_MAPS_API_KEY)
})(Pharmacies);

