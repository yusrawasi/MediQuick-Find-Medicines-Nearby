import * as React from 'react';
import LoginLayout from '../src/components/LoginLayout';
import Link from 'next/link';
import {Row, Col, Button, Form, Image} from 'react-bootstrap';
class Login extends React.Component {
  render () {
    return (
      <LoginLayout title="Login" classname="login">
        <Row>
          <Col lg={6} md={12} className="p-0 registraion">
            <div className="d-flex align-items-center justify-content-center flex-column h-100vh login-box text-center">
              <div>
                <h1 className="mb-3 ">Welcome Back</h1>
                <p className="mb-4">
                  Enter your personal details and start journey with us
                </p>
                <Button
                  variant="outline-light"
                  className="btn btn-block btn-lg"
                >
                  <Link href="/panel/register"><span>Sign Up</span></Link>
                </Button>
              </div>
            </div>

          </Col>
          <Col lg={6} md={12} className="p-0 login-form">
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
                  <Form.Group controlId="LoginEmail">
                    <Form.Control type="email" placeholder="Email Address" />
                  </Form.Group>
                  <Form.Group
                    controlId="LoginPassword"
                    className="custom-password position-relative"
                  >
                    <Form.Control type="password" placeholder="Password" />
                    <span className="position-absolute">
                      <Link href=""><a className="text-muted">Forgot?</a></Link>
                    </span>
                  </Form.Group>
                  <Button className="btn btn-block btn-lg btn-secondary">
                    <Link href="/panel/dashboard">
                      <a className="text-white">Login</a>
                    </Link>
                  </Button>
                  <p className="m-t-15 text-xlg">
                    <span className="text-muted">Don't have an account?</span>
                    <Link href="/panel/register">
                      <span> <b>Create Account</b></span>
                    </Link>
                  </p>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </LoginLayout>
    );
  }
}

export default Login;
