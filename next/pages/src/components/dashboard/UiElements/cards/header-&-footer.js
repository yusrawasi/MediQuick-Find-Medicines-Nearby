import * as React from 'react';
import Link from 'next/link';
import {Card, Row, Col, Button, ListGroup} from 'react-bootstrap';

class Hnfcards extends React.Component {
  render () {
    return (
      <Card className="m-t-15">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button>Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    );
  }
}
export default Hnfcards;
