import React, { Component } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import axios from 'axios';
import SelectSearch from 'react-select-search';
import "../../css/style.css";

class Medicine extends Component {
  constructor (props) {
    super(props);
    this.state = {
      id: 0,
      brand: '',
      dosage: '',
      manufacturer: '',
      brands: [],
      dosageForms: [],
      manufacturers: [],
      generics: [],

      genericsSelected: [{g_id: 1, g_name: "", strength: ""}]

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){

    axios.get(`../api/manufacturer`).then(response => {
      this.setState({
          manufacturers: response.data.map((item)=>({id: item.m_id, name: item.m_name, value: item.m_name})),
          manufacturer: response.data[0].m_name
      });
  });

    axios.get(`../api/brand`).then(response => {
        this.setState({
            brands: response.data.map((item)=>({id: item.b_id, name: item.b_name, value: item.b_name})),
            brand: response.data[0].b_name
        });
    });

    axios.get(`../api/dosage`).then(response => {
        this.setState({
            dosageForms: response.data.map((item)=>({id: item.d_id, name: item.d_name, value: item.d_name})),
            dosage: response.data[0].d_name
        });
    });

    axios.get(`../api/generic`).then(response => {
        // let data = response.data.map((item)=>{
        //   return {
        //     id: item.g_id, name: item.g_name, value: item.g_name
        //   }
        // });
        const element = response.data[0];
        this.setState({
            generics: response.data.map((item)=>({id: item.g_id, name: item.g_name, value: item.g_name})),
            genericsSelected: [{id: element.g_id, name: element.g_name, value: element.g_name, strength: ''}]
        });
    });
    
  }

  handleChange(e){
      console.log(e.target.name);
      const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name 
    
        this.setState({
          [name]: value
        });
  }



  handleSubmit(e){
    e.preventDefault();

    console.log(this.state);
  }

  addClick(){
    this.setState(prevState => ({ genericsSelected: [...prevState.genericsSelected, {g_id: 1, g_name: "", strength: ""}]}))
  }
  
  removeClick(i){
     let values = [...this.state.genericsSelected];
     values.splice(i,1);
     this.setState({ genericsSelected: values });
  }

  createUI(){
    return this.state.genericsSelected.map((el, i) => 
        
        <div key={i}>
         {/* <input name="g_name" type="text" value={el.g_name||''} onChange={this.handleGenericChange.bind(this, i)} />
         <input name="strength" type="text" value={el.strength||''} onChange={this.handleGenericChange.bind(this, i)} />
         <input type='button' value='remove' onClick={this.removeClick.bind(this, i)}/> */}

          <Form.Row>
            
            <Col md={6}>
              {/* <Form.Control name="g_name" as="select" value={el.name} onChange={this.handleGenericChange.bind(this, i)}>
                {
                  this.state.generics.map( cat => {
                    return <option key={cat.g_id} value={cat.g_name}>{cat.g_name}</option>
                  })
                }
              </Form.Control>
              <SelectSearch options={this.state.generics} value={el.name} 
                name="generic" placeholder="Drug Name" 
              /> */}
              <SelectSearch options={this.state.generics} value={el.name} 
                onChange={(values, state, props) => {this.handleGenericChangeSelectReact.bind(this, i, values, props)()}} 
                name="name" placeholder="Drug Name" 
              />
            </Col>
            <Col md={4}>
              <Form.Control style={{height: '75%'}} name="strength" type="text" value={el.strength} onChange={this.handleGenericChange.bind(this, i)}/>
            </Col>
            <Col md={2}>
              <Button variant="danger" style={{height: '75%'}} onClick={this.removeClick.bind(this, i)} block>Remove</Button>
            </Col>
          </Form.Row>
        </div>          
    )
  }

  handleGenericChange(i, event) {
      let values = [...this.state.genericsSelected];
      values[i][event.target.name] = event.target.value;
      this.setState({ genericsSelected: values });
      console.log(values);
  }

  handleGenericChangeSelectReact(i, values, props) {
    let data = [...this.state.genericsSelected];
    data[i][props.name] = values.name;
    this.setState({ genericsSelected: data });
    console.log(data);

}

  render() {

    return (
      <div className="content">
        <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
        <Container>
          <Row>
            <Col md={12}>
              <Card>
                <Card.Body>
                <Form onSubmit={this.handleSubmit}>
                  <Row>
                  <Col md={4}>
                  <Form.Group controlId="manufacturer">
                    <Form.Label>Manufacturer</Form.Label>
                    {/* <Form.Control name="manufacturer" as="select" onChange={this.handleChange}>
                      {
                        this.state.manufacturers.map( cat => {
                          return <option key={cat.m_id} value={cat.m_name}>{cat.m_name}</option>
                        })
                      }

                    </Form.Control> */}
                    <SelectSearch options={this.state.manufacturers} value={this.state.manufacturer} 
                      onChange={(values, state, props) => {this.setState({[props.name]:values.name})}} 
                      name="manufacturer" placeholder="Manufacturer" 
                    />
                    {/* <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text> */}
                  </Form.Group>
                  </Col>
                  
                  <Col md={4}>
                  <Form.Group controlId="brand">
                    <Form.Label>Brand</Form.Label>
                    {/* <Form.Control name="brand" as="select" onChange={this.handleChange}>
                      {
                        this.state.brands.map( cat => {
                          return <option key={cat.b_id} value={cat.b_name}>{cat.b_name}</option>
                        })
                      }

                    </Form.Control> */}
                    <SelectSearch options={this.state.brands} value={this.state.brand} 
                      onChange={(values, state, props) => {this.setState({[props.name]:values.name})}} 
                      name="brand" placeholder="Brand"
                    />
                  </Form.Group>
                  </Col>

                  <Col md={4}>
                  <Form.Group controlId="dosageForm" onChange={this.handleChange}>
                    <Form.Label>Dosage Form</Form.Label>
                    {/* <Form.Control name="dosageForm" as="select">
                      {
                        this.state.dosageForms.map( cat => {
                          return <option key={cat.d_id} value={cat.d_name}>{cat.d_name}</option>
                        })
                      }

                    </Form.Control> */}
                    <SelectSearch options={this.state.dosageForms} value={this.state.dosage} 
                      onChange={(values, state, props) => {this.setState({[props.name]:values.name})}} 
                      name="dosage" placeholder="Dosage Form" 
                    />
                  </Form.Group>
                  </Col>
                  </Row>
                  <Form.Group controlId="active">
                    <Form.Check type="checkbox" label="Active" data-toggle="toggle"/>
                  </Form.Group>
                  
                  <Form.Group>
                    <Form.Label>Drugs</Form.Label>
                    {this.createUI()}        

                  </Form.Group>
                  <Button variant='success' value='Add More' onClick={this.addClick.bind(this)}>Add More</Button>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
                </Card.Body>
                
              </Card>
            </Col>

            
          </Row>
        </Container>
      </div>
    );
  }
}

export default Medicine;
