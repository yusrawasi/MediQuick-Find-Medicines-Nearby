import * as React from 'react';
import Link from 'next/link';
import {
  Button,
  ButtonToolbar,
 
} from 'react-bootstrap';

class ActiveDisabled extends React.Component {
  render () {
    return (
      <div className="d-flex justify-content-between flex-wrap">
        <div className="col-md-6">
          <ButtonToolbar>
            <Button variant="primary" active>Primary button</Button>
            <Button variant="secondary" active>Button</Button>
          </ButtonToolbar>
        </div>
        <div className="col-md-6 xs-pt-15 md-pt-0">
          <ButtonToolbar>
            <Button variant="primary" disabled>Primary button</Button>{' '}
            <Button variant="secondary" disabled>Button</Button>{' '}
            <Button variant="secondary" disabled>
              <Link href=""><a className="text-white">Link</a></Link>
            </Button>
          </ButtonToolbar>
        </div>

      </div>
    );
  }
}
export default ActiveDisabled;
