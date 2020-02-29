import * as React from 'react';
import LoginLayout from '../src/components/LoginLayout';
import Link from 'next/link';
import {Row, Col, Button, Form, Image} from 'react-bootstrap';
class Register extends React.Component {
  render () {
    return (
      <LoginLayout title="Registration" classname="Register">
        <Row>

          <Col lg={6} md={12} className="p-0">
            <div className="d-flex align-items-center justify-content-center flex-column h-100vh login-form loginBg">
              <div className="d-flex flex-column login-container">
                <div className="d-flex align-items-center justify-content-center mb-5 brand-container">
                  <Image
                    src="/static/images/logo-dark.png"
                    fluid
                    className="logo-img"
                  />
                </div>
                <Form className="text-center">
                  <Form.Group controlId="Name">
                    <Form.Control type="text" placeholder="Your Name" />
                  </Form.Group>
                  <Form.Group controlId="LoginEmail">
                    <Form.Control type="email" placeholder="Email Address" />
                  </Form.Group>
                  <Form.Group
                    controlId="LoginPassword"
                    className="custom-password position-relative"
                  >
                    <Form.Control type="password" placeholder="Password" />
                    <span className="position-absolute">
                      <i className="fa fa-eye" />
                    </span>
                  </Form.Group>
                  <Button className="btn btn-block btn-lg btn-secondary">
                    Submit
                  </Button>
                  <p className="m-t-15 text-xlg">
                    <span className="text-muted">Do you have an account?</span>
                    <Link href="/index"><span> Login here</span></Link>
                  </p>
                </Form>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} className="p-0">
            <div className="d-flex align-items-center justify-content-center flex-column h-100vh login-box text-center">
              <div>
                <h1 className="mb-3 ">Hello, Friend</h1>
                <p className="mb-4">
                  Enter your user details and Start journey with us
                </p>
                <Button
                  variant="outline-light"
                  className="btn btn-block btn-lg"
                >
                  <Link href="/index"><span>Login</span></Link>
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
