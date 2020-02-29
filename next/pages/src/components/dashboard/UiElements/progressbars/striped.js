import * as React from 'react';
import Link from 'next/link';
import {Card, Table, Hr, ProgressBar} from 'react-bootstrap';

class Striped extends React.Component {
  render () {
    return (
      <div>
        <ProgressBar striped now={65} className="mb-3" />
        <ProgressBar striped variant="success" now={25} className="mb-3" />
        <ProgressBar striped variant="info" now={50} className="mb-3" />
        <ProgressBar striped variant="warning" now={75} className="mb-3" />
        <ProgressBar striped variant="danger" now={100} className="mb-3" />
      </div>
    );
  }
}
export default Striped;
