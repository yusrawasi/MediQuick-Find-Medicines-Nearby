import * as React from 'react';
import Link from 'next/link';
import {Card, Form, Button} from 'react-bootstrap';

class Defaultform extends React.Component {
  render () {
    return (
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="rounded-0"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              className="rounded-0"
            />
          </Form.Group>

          <Form.Group controlId="formBasicChecbox">
            <Form.Check
              type="checkbox"
              label="Remember me"
              className="font-weight-bold"
            />
          </Form.Group>

          <Button type="submit">Sign in</Button>
        </Form>
      </div>
    );
  }
}
export default Defaultform;
