import * as React from 'react';
import Link from 'next/link';
import {Card, Row, Col, Button, ListGroup} from 'react-bootstrap';

class bgvariantcards extends React.Component {
  render () {
    return (
      <Row className="m-t-15 card-container">
        <Col lg={4} md={6} sm={12} className="xs-pb-15 lg-pb-15">
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa et, suscipit non nihil voluptates, maxime ad dignissimos vitae.
              </Card.Text>
              <Card.Text>
                Someone famous in Source Title
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12} className="xs-pb-15 lg-pb-15">
          <Card bg="success" className="color-cards">
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa et, suscipit non nihil voluptates, maxime ad dignissimos vitae.
              </Card.Text>
              <Card.Text className="text-white">
                Someone famous in Source Title
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12} className="xs-pb-15 lg-pb-15">
          <Card bg="info" className="color-cards">
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa et, suscipit non nihil voluptates, maxime ad dignissimos vitae.
              </Card.Text>
              <Card.Text>
                Someone famous in Source Title
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12} className="xs-pb-15 lg-pb-15">
          <Card bg="danger" className="color-cards">
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa et, suscipit non nihil voluptates, maxime ad dignissimos vitae.
              </Card.Text>
              <Card.Text>
                Someone famous in Source Title
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12} className="media-margin">
          <Card bg="warning" className="color-cards">
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa et, suscipit non nihil voluptates, maxime ad dignissimos vitae.
              </Card.Text>
              <Card.Text>
                Someone famous in Source Title
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12} className="media-margin">
          <Card bg="primary" className="color-cards">
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa et, suscipit non nihil voluptates, maxime ad dignissimos vitae.
              </Card.Text>
              <Card.Text>
                Someone famous in Source Title
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default bgvariantcards;
