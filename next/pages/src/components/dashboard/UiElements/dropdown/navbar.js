import * as React from 'react';
import Link from 'next/link';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  FormControl,
  Form,
  Button,
  InputGroup,
  Image,
  Dropdown,
  Card,
} from 'react-bootstrap';

class Navbardefault extends React.Component {
  render () {
    return (
      <div>
        <p><strong>Default Style</strong></p>
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link><Link href=""><span>Home</span></Link></Nav.Link>
              <Nav.Link><Link href=""><span>Link</span></Link></Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link href=""><span>Action</span></Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href=""><span>Another action</span></Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href=""><span>Something</span></Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link href=""><span>Separated link</span></Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2 rounded-0 bg-white border"
                />
                <Button className="btn bg-transparent text-dark border">
                  Search
                </Button>
              </Form>
            </Nav>
            <Nav>
              <Nav.Link href="#link" className="mr-auto">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link href=""><span>Action</span></Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href=""><span>Another action</span></Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href=""><span>Something</span></Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link href=""><span>Separated link</span></Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <hr />
        <p><strong>Inverted Style</strong></p>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link><Link href=""><span>Link</span></Link></Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link href=""><span>Action</span></Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href=""><span>Another action</span></Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href=""><span>Something</span></Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link href=""><span>Separated link</span></Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2 rounded-0"
                />
                <Button className="btn btn bg-transparent text-white border">
                  Search
                </Button>
              </Form>
            </Nav>
            <Nav>
              <Nav.Link className="mr-auto">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link href=""><span>Action</span></Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href=""><span>Another action</span></Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href=""><span>Something</span></Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link href=""><span>Separated link</span></Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Navbardefault;
