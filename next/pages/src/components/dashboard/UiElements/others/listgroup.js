import * as React from 'react';
import Link from 'next/link';
import {Card, Table, Hr, ListGroup} from 'react-bootstrap';

class Listgroup extends React.Component {
  render () {
    return (
      <div>
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>

        <hr />

        <ListGroup variant="flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>

        <hr />

        <ListGroup>
          <ListGroup.Item>No style</ListGroup.Item>
          <ListGroup.Item action variant="primary">Primary</ListGroup.Item>
          <ListGroup.Item action variant="secondary">Secondary</ListGroup.Item>
          <ListGroup.Item action variant="success">Success</ListGroup.Item>
          <ListGroup.Item action variant="danger">Danger</ListGroup.Item>
          <ListGroup.Item action variant="warning">Warning</ListGroup.Item>
          <ListGroup.Item action variant="info">Info</ListGroup.Item>
          <ListGroup.Item action variant="light">Light</ListGroup.Item>
          <ListGroup.Item action variant="dark">Dark</ListGroup.Item>
        </ListGroup>

      </div>
    );
  }
}
export default Listgroup;
