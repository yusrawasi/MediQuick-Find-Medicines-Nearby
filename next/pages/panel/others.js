import * as React from 'react';
import Layout from '../src/components/Layout';
import {Row, Col, Card} from 'react-bootstrap';
import ListGroup from '../src/components/dashboard/UiElements/others/listgroup';
import Labels from '../src/components/dashboard/UiElements/others/labels';
import Carousel from '../src/components/dashboard/UiElements/others/carousel';
import Tooltips from '../src/components/dashboard/UiElements/others/tooltip';
import Popovers from '../src/components/dashboard/UiElements/others/popover';

class Others extends React.Component {
  render () {
    return (
      <Layout title="other-elements" classname="others">
        <Row className="mb-3" className="other-container">
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>List Group</Card.Header>
              <Card.Body><ListGroup /></Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12} className="media-margin">
            <Card>
              <Card.Header>Labels</Card.Header>
              <Card.Body><Labels /></Card.Body>
            </Card>
            <Card className="m-t-15">
              <Card.Header>Carousel</Card.Header>
              <Card.Body><Carousel /></Card.Body>
            </Card>
            <Card className="m-t-15">
              <Card.Header>Tooltips</Card.Header>
              <Card.Body><Tooltips /></Card.Body>
            </Card>
            <Card className="m-t-15">
              <Card.Header>Popovers</Card.Header>
              <Card.Body><Popovers /></Card.Body>
            </Card>
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default Others;
