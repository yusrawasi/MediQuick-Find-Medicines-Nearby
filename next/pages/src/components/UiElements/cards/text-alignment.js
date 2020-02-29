import * as React from 'react';
import Link from 'next/link';
import {Card, Row, Col, Button, ListGroup} from 'react-bootstrap';

class Alignmentcards extends React.Component {
  render () {
    return (
      <Row className="m-t-15">
        <Col lg={4} sm={12}>
          <Card>
            <Card.Body className="text-left">
              <Card.Title>Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa et, suscipit non nihil voluptates, maxime ad dignissimos vitae.
              </Card.Text>
              <Button>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} sm={12} className="media-margin">
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa et, suscipit non nihil voluptates, maxime ad dignissimos vitae.
              </Card.Text>
              <Button>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} sm={12} className="media-margin">
          <Card className="text-right">
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa et, suscipit non nihil voluptates, maxime ad dignissimos vitae.
              </Card.Text>
              <Button>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default Alignmentcards;
