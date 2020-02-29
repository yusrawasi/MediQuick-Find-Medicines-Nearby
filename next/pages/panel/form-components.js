import * as React from 'react';
import Layout from '../src/components/Layout';
import Fcomponents from '../src/components/form/components/Components';
import {Row, Col, Card} from 'react-bootstrap';

class Formcomponents extends React.Component {
  render () {
    return (
      <Layout title="form-components" classname="Formcomponents">

        <Row>
          <Col sm={12}>
            <Card>
              <Card.Header>Components</Card.Header>
              <Card.Body><Fcomponents /></Card.Body>
            </Card>
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default Formcomponents;
