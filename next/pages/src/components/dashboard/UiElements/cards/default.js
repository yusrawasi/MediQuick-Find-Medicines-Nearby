import * as React from 'react';
import Link from 'next/link';
import {Card, Button} from 'react-bootstrap';

class Defaultcards extends React.Component {
  render () {
    return (
      <Card className="m-t-15">
        <Card.Img variant="top" src="./static/images/card-header.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button>Button</Button>
        </Card.Body>
      </Card>
    );
  }
}
export default Defaultcards;
