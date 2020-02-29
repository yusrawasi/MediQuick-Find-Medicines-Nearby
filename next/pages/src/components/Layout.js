import * as React from 'react';
import {get} from 'lodash';
import Link from 'next/link';
import {Navbar, Nav, Image, Button, Collapse, Modal} from 'react-bootstrap';
import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import ModalPrime from '../components/ModalPrime';
import Header from '../components/Header';
import RightSidebar from '../components/RightSidebar';
import NoSSR from 'react-no-ssr';

class Layout extends React.Component {
  state = {
    condition: false,
    chat: false,
    setting: false,
    show: false,
    setShow: false,
    showModal: false,
  };
  constructor (props) {
    super (props);

    this.handleClick = this.handleClick.bind (this);
    this.handleChat = this.handleChat.bind (this);
    this.handleSetting = this.handleSetting.bind (this);
    this.handleOpenModal = this.handleOpenModal.bind (this);
    this.handleCloseModal = this.handleCloseModal.bind (this);

    this.state = {
      condition: false,
      chat: false,
      setting: false,
      open: false,
      style: false,
      showModal: false,
      show: false,
      setShow: false,
    };
  }
  handleSelect (activeKey) {
    this.setState ({activeKey});
  }

  handleChat () {
    this.setState ({
      chat: !this.state.chat,
    });
  }

  handleSetting () {
    this.setState ({
      setting: !this.state.setting,
    });
  }
  handleOpenModal () {
    this.setState ({showModal: true});
  }

  handleCloseModal () {
    this.setState ({showModal: false});
  }

  handleClick () {
    this.setState ({
      condition: !this.state.condition,
    });
  }


  render () {
    const title = get (this.props, 'title', ' ');
    const classname = get (this.props, 'classname', ' ');
    const {open} = this.state;
    const {style} = this.state;

    return (
      
      <div className={classname} >
        <Head>
          <html className="theme-light">
            <title>Swift Dashboard -{title}</title>
            <meta charSet="utf-8" />
            <link
              rel="icon"
              href="/static/images/favicon.png"
              type="image/x-icon"
            />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </html>
        </Head>
        {/* Left Navigation */}
        <div 
          className={
            this.state.condition
              ? 'col-sm-2 bg-light sidebar toggled sidebartext position-fixed w-200 h-100vh horizantal'
              : 'bg-light sidebar sidebartext position-fixed w-200 h-100vh horizantal'
          }
        >
          <Navbar className="flex-column p-0 align-items-left">
            <Navbar.Brand>
              <Link href="/dashboard">
                <div className="brand-container d-flex justify-content-center align-items-center">
                  <Image
                    src="/static/images/logo-light.png"
                    fluid
                    className="logo-img"
                  />
                </div>
              </Link>
            </Navbar.Brand>
            <i className="fa fa-close" onClick={this.handleClick} />
            <Sidebar />
          </Navbar>
        </div>
        {/* End of Left Navigation */}

        <div
          className={
            this.state.condition
              ? 'main-conatiner toggled row'
              : 'main-conatiner row'
          }
        >

          {/* Header Section */}
          <header className=" col-sm-12 headerbg position-fixed " changeNav>
            <Navbar className="custom-navbar">
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <div className="d-inline-block">
                    <i className="fa fa-bars" onClick={this.handleClick} />
                  </div>
                </Nav>
                <Header />

                <div
                  className={
                    !this.state.setting
                      ? 'hide setting mr-3 ml-2 position-relative'
                      : 'show setting mr-3 ml-2 position-relative'
                  }
                >
                  <i className="fa fa-gear" onClick={this.handleSetting} />
                  <div className="setting-child position-absolute">
                    <Button
                      onClick={this.handleOpenModal}
                      aria-controls="themecolor"
                      className="d-flex justify-content-between align-items-center"
                    >
                      <p className="mb-0">Theme Color</p>
                      <i className="fa fa-angle-right" />
                    </Button>
                    <Collapse in={this.state.open}>
                      <div id="themecolor">
                        <div className="d-flex" />
                      </div>
                    </Collapse>
                    <Button
                      onClick={this.handleOpenModal}
                      aria-controls="themestyle"
                      aria-expanded={open}
                      className="d-flex themestyle justify-content-between align-items-center"
                    >
                      <p className="mb-0">Navigation Style</p>
                      <i className="fa fa-angle-right" />
                    </Button>
                    <Collapse in={this.state.style}>
                      <div id="themestyle" />
                    </Collapse>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <img src="/static/images/chat.png" onClick={this.handleChat} />
                  {' '}
                </div>
              </Navbar.Collapse>
            </Navbar>
          </header>

          {/* End of Header Section */}

          {/* Right Sidebar */}
          <div className={!this.state.chat ? 'hide' : 'show'}>
            <div className="rightSide position-fixed theme-shadow chatbar">
              <div
                className={
                  !this.state.chat ? 'hide chatHeader' : 'show chatHeader'
                }
              >
                <div className="chat-profile d-flex align-items-center">
                  <img src="/static/images/ella.png" className="img-fluid" />
                  Ella Montgomery
                  {' '}
                  <i
                    className="fa fa-close ml-auto mr-3"
                    onClick={this.handleChat}
                  />
                </div>
              </div>
              <RightSidebar />
            </div>
          </div>
          {/* End of Right Sidebar */}

          {/* Main Container */}
          <NoSSR>
            <article className="col-sm-12 dashboard-section">
              {this.props.children}
            </article>
          </NoSSR>
          {/* End of Main Container */}

        </div>
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
export default Layout;
