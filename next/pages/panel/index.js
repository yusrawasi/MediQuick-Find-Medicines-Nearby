import * as React from 'react';
import LoginLayout from '../src/components/LoginLayout';
import Link from 'next/link';
import {Row, Col, Button, Form, Image} from 'react-bootstrap';
import axios from 'axios';
import Router from 'next/router';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

class Login extends React.Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.email = React.createRef();
    this.password = React.createRef();
    this.state = {
      token: cookies.get('user_token') || null
    }
  }

  async componentDidMount(){
    // if(this.state.token){
    //   Router.push('/panel/dashboard');
    // }
    // const response = await axios.get("/api/user", { headers: { 'Authorization': 'bearer '+this.state.token } });
    // // dont really care about response, as long as it not an error
    // console.log("token ping:", response.data, this.state.token);
  }

  onSubmit(e){
    e.preventDefault();
    const reference = this;
    axios.post('/api/login', {
      email: this.email.current.value,
      password: this.password.current.value,
    })
    .then(function (response) {
      console.log(response.data.token);
      cookies.set('user_token', response.data.token);
      console.log("cookie token", cookies.get('user_token'));

      reference.setState({token: response.data.token});
      console.log('state token', reference.state.token);
      Router.push('/panel/dashboard');
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render () {
    return (
      <LoginLayout title="Login" classname="login">
        <Row>
          <Col lg={6} md={12} className="p-0 registraion">
            <div className="d-flex align-items-center justify-content-center flex-column h-100vh login-box text-center">
              <div>
                <h1 className="mb-3 ">MediQuick</h1>
                <p className="mb-4">
                  Find Authentic Medicines Nearby. Join Us!
                </p>
                <Button
                  variant="outline-light"
                  className="btn btn-block btn-lg"
                >
                  <Link href="/panel/register"><a>Sign Up</a></Link>
                </Button>
              </div>
            </div>

          </Col>
          <Col lg={6} md={12} className="p-0 login-form">
            <div className="d-flex align-items-center justify-content-center flex-column h-100vh login-form loginBg">
              <div className="d-flex flex-column login-container">
                <div className="d-flex align-items-center justify-content-center mb-5 brand-container">
                  <Image
                    src="/static/images/mediquick-logo.png"
                    fluid
                    className="logo-img"
                  />
                </div>
                <Form className="text-center" onSubmit={this.onSubmit}>
                  <Form.Group controlId="LoginEmail">
                    <Form.Control type="email" placeholder="Email Address" ref={this.email}/>
                  </Form.Group>
                  <Form.Group
                    controlId="LoginPassword"
                    className="custom-password position-relative"
                  >
                    <Form.Control type="password" placeholder="Password" ref={this.password}/>
                    <span className="position-absolute">
                      <Link href=""><a className="text-muted">Forgot?</a></Link>
                    </span>
                  </Form.Group>
                  <Button className="btn btn-block btn-lg btn-secondary" type='submit'>
                    {/* <Link href="/panel/dashboard">
                      <a className="text-white">Login</a>
                    </Link> */}
                    Login
                  </Button>
                  <p className="m-t-15 text-xlg">
                    <span className="text-muted">Don't have an account?</span>
                    <Link href="/panel/register">
                      <a> <b>Create Account</b></a>
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
