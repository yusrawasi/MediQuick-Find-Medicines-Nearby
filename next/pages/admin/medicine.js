import React, { Component } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import axios from 'axios';
import SelectSearch from 'react-select-search';
import "../../css/style.css";

const $ = require('jquery');
$.DataTable = require('datatables.net');

class Medicine extends Component {
  constructor (props) {
    super(props);
    this.state = {
      id: 0,
      brand: '',
      dosage: '',
      manufacturer: '',
      packaging: '',
      price: 0,
      sku_productCode: 'MEDXXX',

      brands: [],
      dosageForms: [],
      manufacturers: [],
      generics: [],

      genericsSelected: [{id: 1, name: "", value:"", strength: ""}],

      medicines: []

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
        const element = response.data[0];
        this.setState({
            generics: response.data.map((item)=>({id: item.g_id, name: item.g_name, value: item.g_name})),
            genericsSelected: [{id: element.g_id, name: element.g_name, value: element.g_name, strength: ''}]
        });
    });

    axios.get('../api/medicine').then(response => {
      this.setState({
        medicines: response.data
      });
      console.log(response);
      this.$el = $(this.el);
    this.$el.DataTable(
      {
        data: this.state.medicines,
        "columnDefs": [
          {
              // The `data` parameter refers to the data for the cell (defined by the
              // `data` option, which defaults to the column being worked with, in
              // this case `data: 0`.
              // "render": function ( data, type, row ) {
              //     var html = $.parseHTML(data);
              //     console.log(html);
              //     return html[0].data;
              // },
              // "targets": [1]
          },
          // { "visible": true,  "targets": [ 3 ] }
          {
            // The `data` parameter refers to the data for the cell (defined by the
            // `data` option, which defaults to the column being worked with, in
            // this case `data: 0`.
            // "render": function ( data, type, row ) {
            //     var html = $.parseHTML(data);
            //     console.log(html);
            //     return html[0].data;
            // },
            // "targets": [2]
        }
      ],
        columns: [
            { title: "ID", data: 'med_id' },
            { title: "Name", data: 'brand_name' },
            { title: "Dosage Form", data: 'dosage_name' },
            { title: "Manufacturer", data: 'manufacturer_name' },

            {
              mRender: function (data, type, row) {
                const drugs = row['generics'];
                let drugList = drugs.map((drug)=>{
                  return '<span>'+ drug.drugname +': ' + drug.strength + '</span>';
                });
                  return '<p>' + drugList + '</p>';
              }
            },
            { title: "Packaging", data: 'packaging' },
            {
              mRender: function (data, type, row) {
                  return '<a href="#" class="table-edit" data-id="' + row[0] + '">EDIT</a>'
              }
            }
           
        ]
    }
    )
    });
    
  }

  handleChange(e){
      const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name 
    
        this.setState({
          [name]: value
        });
  }



  handleSubmit(e){
    e.preventDefault();

    const data = {
      b_id: this.state.brand.id,
      m_id: this.state.manufacturer.id,
      d_id: this.state.dosage.id,
      packaging: this.state.packaging,
      med_generics: this.state.genericsSelected,
      strips_per_packet: '0',
      sku_productCode: this.state.sku_productCode,
      price: this.state.price
    }

    console.log(data);

    axios.post('../api/medicine', data)
    .then(res => console.log(res));
  }

  addClick(){
    this.setState(prevState => ({ genericsSelected: [...prevState.genericsSelected, {id: 1, name: "", strength: "", value: ""}]}))
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
  }

  handleGenericChangeSelectReact(i, values, props) {
    let data = [...this.state.genericsSelected];
    data[i][props.name] = values.name;
    data[i]['value'] = values.name;
    data[i]['id'] = values.id;
    this.setState({ genericsSelected: data });
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
        <link rel="stylesheet" href="https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css"></link>

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
                        <SelectSearch options={this.state.manufacturers} value={this.state.manufacturer.name} 
                          onChange={(values, state, props) => {this.setState({[props.name]:{id: values.id, name: values.name}})}} 
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
                        <SelectSearch options={this.state.brands} value={this.state.brand.name} 
                          onChange={(values, state, props) => {this.setState({[props.name]:{id: values.id, name: values.name}})}} 
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
                        <SelectSearch options={this.state.dosageForms} value={this.state.dosage.name} 
                          onChange={(values, state, props) => {this.setState({[props.name]:{id: values.id, name: values.name}})}} 
                          name="dosage" placeholder="Dosage Form" 
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId="packaging" onChange={this.handleChange}>
                        <Form.Label>Packaging</Form.Label>
                        <Form.Control style={{height: '75%'}} name="packaging" type="text" value={this.state.packaging} onChange={this.handleChange}/>
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId="price" onChange={this.handleChange}>
                        <Form.Label>Price</Form.Label>
                        <Form.Control style={{height: '75%'}} name="price" type="number" value={this.state.price} onChange={this.handleChange}/>
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId="sku_productCode" onChange={this.handleChange}>
                        <Form.Label>Product Code</Form.Label>
                        <Form.Control style={{height: '75%'}} name="sku_productCode" type="text" value={this.state.sku_productCode} onChange={this.handleChange}/>
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
        <Container>
          <Row>
            <Col md={12}>
              <Card style={{padding: '20px'}}>
                <table id="brandDataTable" className="display" width="100%" ref = { el => this.el=el }>

                </table>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Medicine;
