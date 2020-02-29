import * as React from 'react';
import Layout from '../src/components/Layout';
import Icons from '../src/components/UiElements/icon';
import {Row, Col, Card} from 'react-bootstrap';
class Iconpage extends React.Component {
  render () {
    return (
      <Layout title="Icons" classname="icons">
        <div>
          <Row>
            <Col sm={12}>
              <Card>
                <Card.Header>Icons</Card.Header>
                <Card.Body> <Icons /></Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Layout>
    );
  }
}

export default Iconpage;
