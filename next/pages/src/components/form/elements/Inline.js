import * as React from 'react';
import Link from 'next/link';
import {Card, Form, Button} from 'react-bootstrap';

class Inlineform extends React.Component {
  render () {
    return (
      <div>
        <Form className="form-inline">
          <Form.Group controlId="formBasicName">
            <Form.Label className="pr-2">Name </Form.Label>
            <Form.Control
              type="text"
              placeholder="Jane Doe"
              className="rounded-0"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className="pl-2 mr-2">
            <Form.Label className="pr-2">Email </Form.Label>
            <Form.Control
              type="email"
              placeholder="jane.doe@example.com"
              className="rounded-0"
            />
          </Form.Group>
          <Button type="submit">Sign in</Button>
        </Form>
      </div>
    );
  }
}
export default Inlineform;
