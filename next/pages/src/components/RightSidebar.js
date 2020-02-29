import * as React from 'react';
import {get} from 'lodash';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/Header';
import {Badge, Row, Col, Form, Button, Image, Tab, Nav} from 'react-bootstrap';
import * as styles from '../styles/global.scss';

class Index extends React.Component {
  render () {
    return (
      <Tab.Container id="right-sidebar" defaultActiveKey="first">
        <div className="chat-section d-flex">
          <div className="chat-bubbles">
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">
                  <div className="profile-img position-relative">
                    <img
                      src="/static/images/ella.png"
                      className="img-fluid kjjl"
                    />
                    <i className="fa fa-circle text-success position-absolute" />
                    <Badge
                      variant="primary"
                      className="position-absolute rounded-circle text-white"
                    >
                      5
                    </Badge>
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">
                  <div className="profile-img position-relative">
                    <img src="/static/images/user1.png" className="img-fluid" />
                    <i className="fa fa-circle text-success position-absolute" />
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">
                  <div className="profile-img position-relative">
                    <img src="/static/images/user3.png" className="img-fluid" />
                    <i className="fa fa-circle text-success position-absolute" />
                  </div>
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="forth">
                  <div className="profile-img position-relative">
                    <img src="/static/images/user4.png" className="img-fluid" />
                    <i className="fa fa-circle text-success position-absolute" />
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth">
                  <div className="profile-img position-relative">
                    <img src="/static/images/user5.png" className="img-fluid" />
                    <i className="fa fa-circle text-success position-absolute" />
                  </div>
                </Nav.Link>

              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sixth">
                  <div className="profile-img position-relative">
                    <img src="/static/images/ella.png" className="img-fluid" />
                    <i className="fa fa-circle text-danger position-absolute" />
                    <Badge
                      variant="primary"
                      className="position-absolute rounded-circle text-white"
                    >
                      5
                    </Badge>
                  </div>
                </Nav.Link>

              </Nav.Item>
            </Nav>
          </div>
          <div style={{flex: '1'}}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className="chat-page d-flex flex-column position-relative justify-content-center align-items-center">
                  <h3>
                    For chat function,
                    {' '}
                    <br />
                    Please Go to
                    {' '}
                    <a
                      href=" https://strapui.com/view/swift-dashboard"
                      target="_blank"
                    >
                      Premium{' '}
                    </a>
                  </h3>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className="chat-page position-relative">
                  <div className="empty-chats h-100vh d-flex flex-column align-items-center justify-content-center">
                    <i className="fa fa-comments-o mb-4" />
                    <p>Select a contact to start Conversation</p>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <div className="chat-page position-relative">
                  <div className="empty-chats h-100vh d-flex flex-column align-items-center justify-content-center">
                    <i className="fa fa-comments-o mb-4" />
                    <p>Select a contact to start Conversation</p>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="forth">
                <div className="chat-page position-relative">
                  <div className="empty-chats h-100vh d-flex flex-column align-items-center justify-content-center">
                    <i className="fa fa-comments-o mb-4" />
                    <p>Select a contact to start Conversation</p>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <div className="chat-page position-relative">
                  <div className="empty-chats h-100vh d-flex flex-column align-items-center justify-content-center">
                    <i className="fa fa-comments-o mb-4" />
                    <p>Select a contact to start Conversation</p>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="sixth">
                <div className="chat-page position-relative">
                  <div className="empty-chats h-100vh d-flex flex-column align-items-center justify-content-center">
                    <i className="fa fa-comments-o mb-4" />
                    <p>Select a contact to start Conversation</p>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>
    );
  }
}
export default Index;
