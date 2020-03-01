import * as React from 'react';
import Link from 'next/link';
import {Nav, NavDropdown, FormControl, Form, Badge, Button} from 'react-bootstrap';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import Router from 'next/router';

const cookies = new Cookies();

class Header extends React.Component {

  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      token: cookies.get('user_token') || null
    }
  }

  onClick(e){
    e.preventDefault();
    const reference = this;
    axios.get('/api/logout', { headers: { 'Authorization': 'bearer '+this.state.token } })
      .then(response => {
        console.log(response.data);
        // cookies.set('token', null);
        reference.setState({token: null});
        Router.push('/panel');
      })
  }

  render () {
    return (
      <Nav className="align-items-center">
        <Form inline className="custom-navbar-search position-relative">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <i className="fa fa-search position-absolute" />
        </Form>
        <Nav.Link>
          <Link href="#">
            <span><i className="fa fa-envelope" aria-hidden="true" /></span>
          </Link>
        </Nav.Link>
        <Nav.Link className="notification-cont position-relative">
          <Link href="#">
            <span>
              <i className="fa fa-bell" aria-hidden="true" />
              <Badge
                variant="danger"
                className="rounded-circle position-absolute"
              >
                3
              </Badge>
            </span>
          </Link>
        </Nav.Link>
        <NavDropdown
          title={
            <div className="d-inline-block user-avatar">
              <img
                src="/static/images/profile-avatar.png"
                className="img-fluid rounded-circle"
              />
            </div>
          }
          id="basic-nav-dropdown"
          className="profile-dropdown  p-0  mr-2 position-relative"
        >
          <NavDropdown.Divider className="m-0" />
          <NavDropdown.Item className="pt-2 pb-2 theme-container">
            <Link href="/">
              <a className="d-block  navbarLink">
                <p className="mb-0">Log Out</p>
              </a>
            </Link>
            <Button onClick={this.onClick}>Log Out</Button>
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    );
  }
}
export default Header;
