import * as React from 'react';
import Link from 'next/link';
import {
  Navbar,
  Nav,
  Badge,
  Form,
  FormControl,
  NavDropdown,
  Modal,
} from 'react-bootstrap';
import ModalPrime from '../components/ModalPrime';

class Index extends React.Component {
  state = {
    show: false,
    setShow: false,
    showModal: false,
  };
  constructor (props) {
    super (props);
    this.handleOpenModal = this.handleOpenModal.bind (this);
    this.handleCloseModal = this.handleCloseModal.bind (this);
    this.state = {
      show: false,
      setShow: false,
    };
  }

  handleOpenModal () {
    this.setState ({showModal: true});
  }

  handleCloseModal () {
    this.setState ({showModal: false});
  }

  render () {
    return (
      <div>

        <Navbar id="responsive-navbar-nav" className="p-0">
          <Nav className=" sidebar-contents ">
            {/* <Nav.Link active className="d-flex align-items-center">
                    <Link href="/dashboard"><span><i className="fa fa-home mr-2 ml-2"></i> Dashboard</span></Link>
                    <Badge roundedCircle className="ml-auto">3</Badge>
                  </Nav.Link> */}
            <NavDropdown
              className="dashboard "
              title={
                <span><i className="fa fa-gear mr-2 ml-2" /> Catalogue</span>
              }
              id="dashboard-layouts"
            >
              <li>
                <Link href="/panel/brand">
                  <a className="child-nav-list dropdown-item dashboard">
                    Brand
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/panel/generic">
                  <a className="child-nav-list dropdown-item dashboard">
                    Generic
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/panel/manufacturer">
                  <a className="child-nav-list dropdown-item dashboard">
                    Manufacturer
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/panel/medicine">
                  <a className="child-nav-list dropdown-item dashboard">
                    Medicine
                  </a>
                </Link>
              </li>
            </NavDropdown>
            {/* <NavDropdown
              className="elements "
              title={
                <span><i className="fa fa-edit mr-2 ml-2" /> UI Elements</span>
              }
              id="uielemets"
            >
              <li>
                <Link href="/panel/buttons">
                  <a className="child-nav-list dropdown-item buttons">
                    Buttons
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/panel/dropdowns">
                  <a className="child-nav-list dropdown-item dropdown">
                    Dropdowns
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/panel/icon">
                  <a className="child-nav-list dropdown-item icons">Icons</a>
                </Link>
              </li>
              <li>
                <Link href="/panel/cards">
                  <a className="child-nav-list dropdown-item cards">Cards</a>
                </Link>
              </li>
              <li>
                <Link href="/panel/progressbars">
                  <a className="child-nav-list dropdown-item progressbar">
                    Progress Bars{' '}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/panel/pagination">
                  <a className="child-nav-list dropdown-item pagination">
                    Pagination
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/panel/others">
                  <a className="child-nav-list dropdown-item other">
                    Other Elements
                  </a>
                </Link>
              </li>
            </NavDropdown> */}

            {/* <NavDropdown
              className="form "
              title={
                <span><i className="fa fa-file mr-2 ml-2" /> Form Stuffs</span>
              }
              id="formstuffs"
            >
              <li>
                <Link href="/panel/form-elements">
                  <a className="child-nav-list dropdown-item form-elements">
                    Form Elements
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/panel/form-components">
                  <a className="child-nav-list dropdown-item form-components">
                    Form Components
                  </a>
                </Link>
              </li>
            </NavDropdown> */}
            <Link onClick={this.handleOpenModal}>
              <a className="nav-link data-table" onClick={this.handleOpenModal}>
                <i className="fa fa-th mr-2 ml-2" /> Company Profile
              </a>
            </Link>
            <Link onClick={this.handleOpenModal}>
              <a className="nav-link mail" onClick={this.handleOpenModal}>
                <span><i className="fa fa-envelope-o mr-2 ml-2" /> Mail</span>
                <sup>
                  {' '}
                  <Badge className="ml-auto text-white rounded-circle">3</Badge>
                </sup>
              </a>
            </Link>
            <Link onClick={this.handleOpenModal}>
              <a className="nav-link charts" onClick={this.handleOpenModal}>
                <i className="fa fa-bar-chart mr-2 ml-2" /> Reports
              </a>
            </Link>
            <Link onClick={this.handleOpenModal}>
              <a className="nav-link maps " onClick={this.handleOpenModal}>
                <i className="fa fa-map-marker mr-2 ml-2" /> Locations
              </a>
            </Link>
            <Link onClick={this.handleOpenModal}>
              <a className="nav-link  extra" onClick={this.handleOpenModal}>
                <i className="fa fa-clipboard mr-2 ml-2" /> Configurations
              </a>
            </Link>

            {/* <Form
              inline
              className="custom-navbar-search vertical-search pt-2 ml-auto mr-3 position-relative"
            >
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <i className="fa fa-search position-absolute" />
            </Form> */}
          </Nav>
        </Navbar>

        <Modal
          show={this.state.showModal}
          size="md"
          onHide={this.handleCloseModal}
          className="p-0"
        >
          <Modal.Header
            closeButton
            className="p-t-0 p-b-0 purpleBg "
            style={{border: '0'}}
          />
          <ModalPrime />
        </Modal>
      </div>
    );
  }
}
export default Index;
