import * as React from 'react';
import Layout from '../src/components/Layout';
import {Row, Col, Card} from 'react-bootstrap';
import Contextual
  from '../src/components/dashboard/UiElements/progressbars/contextual';
import Striped
  from '../src/components/dashboard/UiElements/progressbars/striped';
import Dynamic
  from '../src/components/dashboard/UiElements/progressbars/dynamic';
class Progressbars extends React.Component {
  render () {
    return (
      <Layout title="Progess-bar" classname="Progressbars">

        <Row className="progress-container">
          <Col md={6} xs={12} className="mb-3">
            <Card>
              <Card.Header>Contextual Progressbars</Card.Header>
              <Card.Body><Contextual /></Card.Body>
            </Card>
          </Col>
          <Col md={6} xs={12} className="mb-3">
            <Card>
              <Card.Header>Striped Progressbars</Card.Header>
              <Card.Body><Striped /></Card.Body>
            </Card>
          </Col>
          <Col xs={12}>
            <Card>
              <Card.Header>Dynamic Progressbars</Card.Header>
              <Card.Body><Dynamic /></Card.Body>
            </Card>
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default Progressbars;
