import * as React from 'react';
import Layout from '../src/components/Layout';
import Navbardefault from '../src/components/UiElements/dropdown/navbar';
import Regulardropdowns
  from '../src/components/UiElements/dropdown/regular-dropdowns';
import Splitdropdowns
  from '../src/components/UiElements/dropdown/split-button-dropdowns';
import Buttonicons
  from '../src/components/UiElements/buttons/buttons-with-icons';
import {Row, Col, Button, Card} from 'react-bootstrap';
import Link from 'next/link';
import * as styles from '../src/styles/global.scss';
class Dropdowns extends React.Component {
  render () {
    return (
      <Layout title="dropdown" classname="dropdowns">
        <div>
          <Row>
            <Col sm={12}>
              <Card>
                <Card.Header>Navbar Dropdowns</Card.Header>
                <Card.Body> <Navbardefault /></Card.Body>
              </Card>
              <Card className="m-t-15 pb-1">
                <Card.Header> Regular Dropdowns</Card.Header>
                <Card.Body><Regulardropdowns /></Card.Body>
              </Card>
              <Card className="m-t-15">
                <Card.Header>Split Dropdowns</Card.Header>
                <Card.Body><Splitdropdowns /></Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Layout>
    );
  }
}

export default Dropdowns;
