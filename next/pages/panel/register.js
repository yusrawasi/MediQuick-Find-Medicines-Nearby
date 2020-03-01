import * as React from 'react';
import LoginLayout from '../src/components/LoginLayout';
import Link from 'next/link';
import {Row, Col, Button, Form, Image} from 'react-bootstrap';
import axios from 'axios';

class Register extends React.Component {

  constructor(props){
    super(props);
    this.name = React.createRef();
    this.email = React.createRef();
    this.password = React.createRef();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    // console.log(this.name.current.value);
    // console.log(this.email.current.value);
    // console.log(this.password.current.value);

    axios.post('/api/register', {
      u_name: this.name.current.value,
      email: this.email.current.value,
      password: this.password.current.value,
      password_confirmation: this.password.current.value,
      contact: "03312444025"
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render () {
    return (
      <LoginLayout title="Registration" classname="Register">
        <Row>

          <Col lg={6} md={12} className="p-0">
            <div className="d-flex align-items-center justify-content-center flex-column h-100vh login-form loginBg">
              <div className="d-flex flex-column login-container">
                <div className="d-flex align-items-center justify-content-center mb-5 brand-container">
                  <Image
                    src="/static/images/mediquick-logo.png"
                    fluid
                    className="logo-img"
                  />
                </div>
                <Form className="text-center" onSubmit = {this.onSubmit}>
                  <Form.Group controlId="Name">
                    <Form.Control type="text" placeholder="Your Name" ref={this.name}/>
                  </Form.Group>
                  <Form.Group controlId="LoginEmail">
                    <Form.Control type="email" placeholder="Email Address" ref={this.email}/>
                  </Form.Group>
                  <Form.Group
                    controlId="LoginPassword"
                    className="custom-password position-relative"
                  >
                    <Form.Control type="password" placeholder="Password" ref={this.password}/>
                    <span className="position-absolute">
                      <i className="fa fa-eye" />
                    </span>
                  </Form.Group>
                  <Button type="submit" className="btn btn-block btn-lg btn-secondary">
                    Submit
                  </Button>
                  <p className="m-t-15 text-xlg">
                    <span className="text-muted">Do you have an account?</span>
                    <Link href="/panel"><a> Login here</a></Link>
                  </p>
                </Form>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} className="p-0">
            <div className="d-flex align-items-center justify-content-center flex-column h-100vh login-box text-center">
              <div>
                <h1 className="mb-3 ">MediQuick</h1>
                <p className="mb-4">
                  Enter your user details and Start journey with us
                </p>
                <Button
                  variant="outline-light"
                  className="btn btn-block btn-lg"
                >
                  <Link href="/panel"><a>Login</a></Link>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </LoginLayout>
    );
  }
}

export default Register;
