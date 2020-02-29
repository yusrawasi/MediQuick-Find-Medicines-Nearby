import * as React from 'react';
import Layout from '../src/components/Layout';
import Defaultform from '../src/components/form/elements/Default';
import Inlineform from '../src/components/form/elements/Inline';
import InlineUnderline from '../src/components/form/elements/Inline-underline';
import UnderlineDefault
  from '../src/components/form/elements/Underline-default';
import {Row, Col, Card} from 'react-bootstrap';

class Formelements extends React.Component {
  render () {
    return (
      <Layout title="form-elements" classname="form-elements">
        <Row>
          <Col xl={6} lg={12}>
            <Card>
              <Card.Header>Default Form</Card.Header>
              <Card.Body><Defaultform /></Card.Body>
            </Card>
            <Card className="m-t-15">
              <Card.Header>Inline Form</Card.Header>
              <Card.Body><Inlineform /></Card.Body>
            </Card>
          </Col>
          <Col xl={6} lg={12} className="media-margin">
            <Card>
              <Card.Header>Underlined Default Form</Card.Header>
              <Card.Body><UnderlineDefault /></Card.Body>
            </Card>
            <Card className="m-t-15">
              <Card.Header>Inline Underline Form</Card.Header>
              <Card.Body><InlineUnderline /></Card.Body>
            </Card>
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default Formelements;
