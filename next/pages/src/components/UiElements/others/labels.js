import * as React from 'react';
import Link from 'next/link';
import {Card, Table, Hr, ListGroup} from 'react-bootstrap';

class Labels extends React.Component {
  render () {
    return (
      <div>
        <span className="badge badge-light p-1 mr-1">Default</span>
        <span className="badge badge-primary p-1 mr-1">Primary</span>
        <span className="badge badge-secondary p-1 mr-1">Secondary</span>
        <span className="badge badge-success p-1 mr-1">Success</span>
        <span className="badge badge-danger p-1 mr-1">Danger</span>
        <span className="badge badge-warning p-1 mr-1">Warning</span>
        <span className="badge badge-info p-1 mr-1">Info</span>
        <span className="badge badge-light p-1 mr-1">Light</span>
        <span className="badge badge-dark p-1 mr-1">Dark</span>

        <br />
        <br />

        <span className="badge badge-light p-1 mr-1">14</span>
        <span className="badge badge-primary p-1 mr-1">14</span>
        <span className="badge badge-secondary p-1 mr-1">14</span>
        <span className="badge badge-success p-1 mr-1">14</span>
        <span className="badge badge-danger p-1 mr-1">14</span>
        <span className="badge badge-warning p-1 mr-1">14</span>
        <span className="badge badge-info p-1 mr-1">
          <i className="fa fa-star" />
        </span>
        <span className="badge badge-light p-1 mr-1">
          <i className="fa fa-certificate" />
        </span>
        <span className="badge badge-dark p-1 mr-1">
          <i className="fa fa-circle" />
        </span>

      </div>
    );
  }
}
export default Labels;
