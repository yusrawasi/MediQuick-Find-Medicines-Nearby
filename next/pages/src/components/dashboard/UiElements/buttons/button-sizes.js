import * as React from 'react';
import {Button} from 'react-bootstrap';

class Buttonsizes extends React.Component {
  render () {
    return (
      <div>
        <Button variant="primary" size="lg" className="mr-2 mb-2">
          Large button
        </Button>
        <Button variant="secondary" size="lg" className="mr-2 mb-2">
          Large button
        </Button>
        <Button variant="success" size="lg" className="mr-2 mb-2">
          Large button
        </Button>
        <Button variant="warning" size="lg" className="mr-2 mb-2 text-white">
          Large button
        </Button>
        <hr />
        <Button variant="primary" size="sm" className="mr-2 mb-2">
          Small button
        </Button>
        <Button variant="secondary" size="sm" className="mr-2 mb-2">
          Small button
        </Button>
        <Button variant="success" size="sm" className="mr-2 mb-2">
          Large button
        </Button>
        <Button variant="warning" size="sm" className="mr-2 mb-2 text-white">
          Large button
        </Button>
        <hr />
        <Button variant="primary" block>Block level button</Button>
      </div>
    );
  }
}
export default Buttonsizes;
