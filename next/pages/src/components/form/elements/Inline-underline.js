import * as React from 'react';
import {Form, Button} from 'react-bootstrap';

class Inlineunderline extends React.Component {
  render () {
    return (
      <div>
        <Form className="form-inline form-underline">
          <Form.Group controlId="formBasicName">
            <Form.Label className="pr-2">Name </Form.Label>
            <Form.Control
              type="text"
              placeholder="Jane Doe"
              className="rounded-0 input-underlined border-bottom"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className="pl-2  mr-2">
            <Form.Label className="font-weight-bold pr-2">Email </Form.Label>
            <Form.Control
              type="email"
              placeholder="jane.doe@example.com"
              className="rounded-0 input-underlined border-bottom"
            />
          </Form.Group>
          <Button type="submit">Sign in</Button>
        </Form>
      </div>
    );
  }
}
export default Inlineunderline;
