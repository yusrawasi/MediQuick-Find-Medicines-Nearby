import * as React from 'react';
import Link from 'next/link';
import {Card, Table, Hr, ProgressBar} from 'react-bootstrap';

class Contextual extends React.Component {
  render () {
    return (
      <div>
        <ProgressBar now={65} className="mb-3 text-blue-theme" />
        <ProgressBar variant="success" now={25} className="mb-3" />
        <ProgressBar variant="info" now={50} className="mb-3" />
        <ProgressBar variant="warning" now={75} className="mb-3" />
        <ProgressBar variant="danger" now={100} className="mb-3" />
      </div>
    );
  }
}
export default Contextual;
