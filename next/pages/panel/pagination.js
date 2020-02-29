import * as React from 'react';
import Layout from '../src/components/Layout';
import Breadcrumbs
  from '../src/components/dashboard/UiElements/pagination/breadcrumbs';
import Cpagination
  from '../src/components/dashboard/UiElements/pagination/cpagination';
import Pager from '../src/components/dashboard/UiElements/pagination/pager';
import Paginationsizes
  from '../src/components/dashboard/UiElements/pagination/pagination-sizes';
import {Row, Col, Card} from 'react-bootstrap';

class Pagination extends React.Component {
  render () {
    return (
      <Layout title="Pagination" classname="Pagination">
        <Row className="pagination-container">
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>Breadcrumbs</Card.Header>
              <Card.Body><Breadcrumbs /></Card.Body>
            </Card>
            <Card className="m-t-15">
              <Card.Header>Pager</Card.Header>
              <Card.Body><Pager /></Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12} className="media-margin">
            <Card>
              <Card.Header>Pagination Alignment</Card.Header>
              <Card.Body><Cpagination /></Card.Body>
            </Card>
            <Card className="m-t-15">
              <Card.Header>Pagination Sizes</Card.Header>
              <Card.Body><Paginationsizes /></Card.Body>
            </Card>
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default Pagination;
