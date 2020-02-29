import * as React from 'react';
import Layout from '../src/components/Layout';
import Defaultcards from '../src/components/UiElements/cards/default';
import Dangercards from '../src/components/UiElements/cards/danger';
import Hnfcards from '../src/components/UiElements/cards/header-&-footer';
import Bgvariantcards
  from '../src/components/UiElements/cards/background-variants';
import Alignmentcards from '../src/components/UiElements/cards/text-alignment';
import Quotecards from '../src/components/UiElements/cards/blockquotes';
import {Row, Col} from 'react-bootstrap';

class Cards extends React.Component {
  render () {
    return (
      <Layout title="Cards" classname="cards">
        <div>
          <Row className="card-container">
            <Col xs={12} lg={4}>
              <div>
                <h5>Default Card</h5>
                <Defaultcards />
              </div>
              <div className="m-t-20">
                <h5>Danger Card</h5>
                <Dangercards />
              </div>
              <div className="m-t-20">
                <h5>Cards with Header & Footer</h5>
                <Hnfcards />
              </div>
            </Col>
            <Col xs={12} lg={8} className="media-margin">
              <div>
                <h5>Cards with Background Variants</h5>
                <Bgvariantcards />
              </div>
              <div className="m-t-20">
                <h5>Text alignment</h5>
                <Alignmentcards />
              </div>
              <div className="m-t-20">
                <h5>Blockquote</h5>
                <Quotecards />
              </div>
            </Col>
          </Row>
        </div>
      </Layout>
    );
  }
}

export default Cards;
