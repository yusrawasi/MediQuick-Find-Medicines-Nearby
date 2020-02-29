import * as React from 'react';
import Link from 'next/link';
import {Card, Row, Col, Button} from 'react-bootstrap';

class Quotecards extends React.Component {
  render () {
    return (
      <Card className="pb-2 m-t-15">
        <Card.Body>
          <blockquote className="blockquote">
            <p>
              {' '}
              Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.
              Francis of Assisi{' '}
            </p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    );
  }
}
export default Quotecards;
