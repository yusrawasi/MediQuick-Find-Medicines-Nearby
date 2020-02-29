import * as React from 'react';
import {Form, Button} from 'react-bootstrap';

class Underlinedefaultform extends React.Component {
  render () {
    return (
      <div>
        <Form className="form-underline">

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="input-underlined rounded-0 border-bottom"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              className="input-underlined rounded-0 border-bottom"
            />
          </Form.Group>

          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>

          <Button type="submit">Sign in</Button>
        </Form>
      </div>
    );
  }
}
export default Underlinedefaultform;
