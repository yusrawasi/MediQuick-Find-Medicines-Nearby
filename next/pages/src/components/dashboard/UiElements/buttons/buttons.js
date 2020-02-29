import * as React from 'react';
import Link from 'next/link';
import {Button} from 'react-bootstrap';

class Cbuttons extends React.Component {
  render () {
    return (
      <div>
        <Button variant="primary" className="mr-2 mb-2">Primary</Button>
        <Button variant="secondary" className="mr-2 mb-2">Secondary</Button>
        <Button variant="success" className="mr-2 mb-2">Success</Button>
        <Button variant="warning" className="mr-2 mb-2 text-white">
          Warning
        </Button>
        <Button variant="danger" className="mr-2 mb-2">Danger</Button>
        <Button variant="info" className="mr-2 mb-2">Info</Button>
        <Button variant="light" className="mr-2 mb-2">Light</Button>
        <Button variant="dark" className="mr-2 mb-2">Dark</Button>
        <Button variant="link" className="mr-2 mb-2">Link</Button>
        <hr />
        <Button variant="outline-primary" className="mr-2 mb-2">Primary</Button>
        <Button variant="outline-secondary" className="mr-2 mb-2">
          Secondary
        </Button>
        <Button variant="outline-success" className="mr-2 mb-2">Success</Button>
        <Button variant="outline-warning" className="mr-2 mb-2">Warning</Button>
        <Button variant="outline-danger" className="mr-2 mb-2">Danger</Button>
        <Button variant="outline-info" className="mr-2 mb-2">Info</Button>
        <Button variant="outline-light" className="mr-2 mb-2">Light</Button>
        <Button variant="outline-dark" className="mr-2 mb-2">Dark</Button>

      </div>
    );
  }
}
export default Cbuttons;
