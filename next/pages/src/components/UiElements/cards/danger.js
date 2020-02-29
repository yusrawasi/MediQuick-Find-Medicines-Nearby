import * as React from 'react';
import Link from 'next/link';
import {Card, Row, Col, Button, ListGroup} from 'react-bootstrap';

class Dangercards extends React.Component {
  render () {
    return (
      <Card className="m-t-15">
        <Card.Img variant="top" src="./static/images/danger-card-img.png" />
        <Card.Body>
          <Card.Title> Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    );
  }
}
export default Dangercards;
