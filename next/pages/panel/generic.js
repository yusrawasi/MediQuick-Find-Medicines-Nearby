import React from 'react';
import { Container, Row, Col, Card, Table, FormGroup, FormControl, FormLabel, HelpBlock, Checkbox, Button } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Layout from '../src/components/Layout';


const $ = require('jquery');
$.DataTable = require('datatables.net');

class Generic extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      flag: true,
      generics: []
    } 
  }

  componentDidMount(){
    axios.get('../api/generic').then(response => {
      this.setState({
        manufacturers: response.data
      });
      console.log(response);
      this.$el = $(this.el);
    this.$el.DataTable(
      {
        data: this.state.manufacturers,
        "columnDefs": [
          {
              // The `data` parameter refers to the data for the cell (defined by the
              // `data` option, which defaults to the column being worked with, in
              // this case `data: 0`.
              "render": function ( data, type, row ) {
                  var html = $.parseHTML(data);
                  console.log(html);
                  return html[0].data;
              },
              "targets": [1]
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
            { title: "ID", data: 'g_id' },
            { title: "Name", data: 'g_name' },
            {
              mRender: function (data, type, row) {
                  return '<a href="#" class="table-edit" data-id="' + row[0] + '">EDIT</a>'
              }
            }
            // { title: "Created At", data: 'created_at' },
            // { title: "Updated At", data: 'updated_at' }
        ]
    }
    )
    });
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state.name);

    fetch('../api/generic/', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
       "name": this.state.name
      })
     })
     .then(res=>res.text())
     .then(data=>console.log(data));
  }

  handleChange = (event) => {
    // console.log(event);
    // let name = event.target.name;
    let value = event.target.value;
    this.setState({name: value});
}

  render() {
    return(
      <Layout title="generic" className="generic">
        <div>
          <link rel="stylesheet" href="https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css"></link>

          <Row>
            <Col sm={12}>
              <Container>
                <Row>
                  <Col md={12}>
                    <Card>
                      <Card.Body>
                        <Card.Title>Create Generic Name</Card.Title>
                        <Card.Text>
                          
                        </Card.Text>
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                          <FormGroup
                              controlId="name">
                              <FormLabel>Generic Name</FormLabel>
                              <FormControl
                                  name="name"
                                  type="text"
                                  value={this.state.name}
                                  placeholder="Enter text"
                                  onChange={this.handleChange}
                              />
                              <FormControl.Feedback />
                          </FormGroup>

                          <Button variant="primary" type="submit">Create</Button>
                        </form>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>

              <Container>
                <Row>
                  <Col md={12}>
                    <Card style={{padding: '20px'}}>
                      <table id="genericDataTable" className="display" width="100%" ref = { el => this.el=el }>

                      </table>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </div>
      </Layout>
    );
  }
}

export default Generic;