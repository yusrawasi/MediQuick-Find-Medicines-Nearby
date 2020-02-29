import * as React from 'react';

import Layout from '../src/components/Layout';
import Cbuttons from '../src/components/UiElements/buttons/buttons';
import Buttonsizes from '../src/components/UiElements/buttons/button-sizes';
import Buttongroup from '../src/components/UiElements/buttons/button-groups';
import ActiveDisabled
  from '../src/components/UiElements/buttons/active-n-disabled';
import Buttonicons
  from '../src/components/UiElements/buttons/buttons-with-icons';
import {Row, Col, Card} from 'react-bootstrap';

class buttons extends React.Component {
  render () {
    return (
      <Layout title="assets" classname="buttons">

        <div>
          <Row className="button-container">
            <Col xs={12} lg={6}>
              <Card>
                <Card.Header>Buttons</Card.Header>
                <Card.Body><Cbuttons /></Card.Body>
              </Card>
              <Card className="m-t-15 pb-1">
                <Card.Header>Buttons Groups</Card.Header>
                <Card.Body><Buttongroup /></Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={6} className="media-margin">
              <Card>
                <Card.Header>Button Sizes</Card.Header>
                <Card.Body><Buttonsizes /></Card.Body>
              </Card>
              <Card className="m-t-15">
                <Card.Header>Buttons with Icons</Card.Header>
                <Card.Body><Buttonicons /></Card.Body>
              </Card>
              <Card className="m-t-15">
                <Card.Header>Active and Disabled Buttons</Card.Header>
                <Card.Body><ActiveDisabled /></Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Layout>
    );
  }
}

export default buttons;
