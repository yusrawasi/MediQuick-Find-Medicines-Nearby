import React, {Component} from 'react';
import Head from 'next/head';
import { withPageRouter } from '../router/withPageRouter';

import { Container, Loader } from 'semantic-ui-react';
import {Row, Col} from 'react-bootstrap';
import "../css/styles.css";

//Importing Components
import Navbar from '../components/Layout/Navbar';
import Map from '../components/LocationComponents/Map';
import AlternateMedicines from '../components/LocationComponents/AlternateMedicines';

//Importing data
import pharmacyList from '../data/pharmacyList';

class Location extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedMedicine: {},
            alternateMedicines: [],
            pharmacies: [],
            loading: true
        }
    }

    componentDidMount(){
        //Fetching medicine Id from URL and using it to find the medicine
        this.fetchData();
    }  

    componentDidUpdate(prevProps) {
        const { pathname, query } = this.props.router
        // verify props have changed to avoid an infinite loop
        if (query.id !== prevProps.router.query.id) {
            this.setState({loading:true});
          // fetch data based on the new query
          this.fetchData();
        }
      }

    fetchData(){
        const {id} = this.props.router.query;

        //Fetching Pharmacies where medicine is available
        this.setState({pharmacies: pharmacyList});

        //Fetching medicine using medicine ID
        fetch(`api/medicine/${id}`)
            .then(res=>res.json())
            .then(data => {
                this.setState({selectedMedicine: data});
            })

        fetch(`api/medicine/${id}/alternate`)
            .then(res=>res.json())
            .then(data => {
                this.setState({alternateMedicines: data, loading: false});
            })
    }
    
    render(){
        const {selectedMedicine, loading} = this.state;
        return (
            <div className = "location-page">
                <Head>
                    <title>Location</title>
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="stylesheet"
                        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
                    />
                    <link href="https://fonts.googleapis.com/css?family=Oswald|Poppins|Shadows+Into+Light&display=swap" rel="stylesheet"></link>
                </Head>
                <Navbar />
                <Container>
                    <Row className = "first-row">
                        <Col className = "selected-med" lg = {8} md = {8} sm={12}>
                                <h1>{selectedMedicine.brand}</h1>
                                <h3 style = {{marginTop:0}}>{selectedMedicine.manufacturer}</h3>
                                <h3 style = {{textTransform : "Capitalize"}}>Dosage: {selectedMedicine.dosage}</h3>
                                <h3 style = {{textTransform : "Capitalize"}}>Packaging: {selectedMedicine.packaging}</h3>
                                <h3 style = {{textTransform : "Capitalize"}}>Price: {selectedMedicine.price}</h3>
                        </Col>

                        <Col className = "alternate-med" lg = {4} md = {4} sm={12}>
                            {loading ? <Loader size='massive' active inline='centered' /> : <AlternateMedicines alternateMedicines = {this.state.alternateMedicines}/>}
                            {/* <AlternateMedicines alternateMedicines = {this.state.alternateMedicines}/> */}
                        </Col>
                    </Row>

                    <Map
                        google={this.props.google}
                        center={{lat: 24.9298, lng: 67.1148}}
                        height='300px'
                        zoom={12}
                    />
                </Container>
            </div>
        );
    }
}

export default withPageRouter(Location);