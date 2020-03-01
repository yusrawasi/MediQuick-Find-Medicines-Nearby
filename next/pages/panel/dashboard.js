import * as React from 'react';
import Layout from '../src/components/Layout';
import Stats from '../src/components/dashboard/Stats';
import Progress from '../src/components/dashboard/Progress';
import Timeline from '../src/components/dashboard/Timeline/Timeline';
import BasicMap from '../src/components/dashboard/Visitorstats/BasicMap';
import Deal from '../src/components/dashboard/Deal';
import Support from '../src/components/dashboard/Support';
import Upcoming from '../src/components/dashboard/Upcoming';
import Barchart from '../src/components/dashboard/weekysales/weekly-sales';
import WeeklysalesReport
  from '../src/components/dashboard/weekysales/weekly-table';
import BuilderXsales
  from '../src/components/dashboard/Applicationsales/Builderx';
import NativeBase
  from '../src/components/dashboard/Applicationsales/Nativebase';
import AntDesign from '../src/components/dashboard/Applicationsales/AntDesign';
import WorkProgress from '../src/components/dashboard/WorkProgress';
import {Row, Col, Card, CardText, Button, Nav, Tab} from 'react-bootstrap';
import {handleAuthSSR} from '../src/components/handleAuthSSR';
import Link from 'next/link';

class Login extends React.Component {
  render () {
    return (
      <Layout title="Dashboard" classname="dashboard">
        <Row className="dashboard-layout">
          <Col lg={3} md={6} sm={12} className="stats">
            <Stats
              icon="1"
              text="Product Deliveries"
              number="2,696"
              statsbg="purpleBg"
            />
          </Col>
          <Col lg={3} md={6} sm={12} className="stats">
            <Stats
              icon="2"
              text="Revenue"
              number="Rs. 2.65M"
              statsbg="skyBg"
            />
          </Col>
          <Col lg={3} md={6} sm={12} className="stats">
            <Stats
              icon="3"
              text="Tenants"
              number="60"
              statsbg="greenBg"
            />
          </Col>
          <Col lg={3} md={6} sm={12} className="stats">
            <Stats
              icon="4"
              text="Medicines"
              number="396"
              statsbg="pinkBg"
            />
          </Col>
        </Row>
        <Row className="pt-15">
          <Col xl={9} md="12">
            <Row className="dashboard-container dashboard-layout">
              <Col lg={8}>
                <Card>
                  <Card.Header>Weekly Sales</Card.Header>
                  <Card.Body>
                    <Row>
                      <Col lg={9} md={8} sm={12}><Barchart /></Col>
                      <Col lg={3} md={4} sm={12}><WeeklysalesReport /></Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} className="media-margin">
                <Card>
                  <Card.Header>Daily Sale</Card.Header>
                  <Card.Body>
                    <div className="progress-container daily-sales ">
                      <div className="d-flex justify-content-center">
                        <Progress value="10" />
                      </div>
                      <div className="d-flex justify-content-between mt-1">
                        <p className="mb-0">
                          <i className="fa fa-square mr-2 text-green" />Sales
                        </p>
                        <p className="mb-0">
                          <i className="fa fa-square mr-2 text-primary" />
                          Pending
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="pt-15">
              <Col md={12}>
                <Tab.Container defaultActiveKey="first">
                  <Card className="cutsom-react-table">
                    <Card.Header className="d-flex justify-content-between align-items-center pt-0 pb-0">
                      Work Progress
                      <Nav variant="pills" className="workprogress-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Last Month</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">All Time</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Card.Header>
                    <Card.Body className="p-0">
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <WorkProgress />
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <WorkProgress />
                        </Tab.Pane>
                      </Tab.Content>
                    </Card.Body>
                  </Card>
                </Tab.Container>
              </Col>
            </Row>
          </Col>
          <Col xl={3} md="12">
            <Row className="dashboard-layout">
              <Col xl={12} lg={6} md={12} className="newdeal-col">
                <Card>
                  <Card.Header className="d-flex justify-content-between align-items-center">
                    New Deal Inquiry
                    <Link href="#">
                      <a className="deal-viewall text-primary">View All</a>
                    </Link>
                  </Card.Header>
                  <Card.Body className="p-0 h-417 overflow-auto">
                    {/* <Deal /> */}
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={12} lg={6} md={12}>
                <Card className="m-t-15">
                  <Card.Header>Application Sales</Card.Header>
                  <Card.Body className="application-sales pt-1">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="mb-0 appname text-md">Manufacturers</p>
                      <BuilderXsales />
                      <p className="mb-0 salecount">Rs. 30,000</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="mb-0 appname text-md">Distributors</p>
                      <NativeBase />
                      <p className="mb-0 salecount">Rs. 80,000</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="mb-0 appname text-md">Retailers</p>
                      <AntDesign />
                      <p className="mb-0 salecount">Rs. 20,000</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="pt-15 dashboard-container">
          <Col lg={4} md={12}>
            <Card>
              <Card.Header>Upcoming Task</Card.Header>
              <Card.Body className="p-0 h-350 overflow-auto pb-0 m-b-20">
                <Upcoming />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={12} className="media-margin">
            <Card className="custom-timeline">
              <Card.Header>Timeline</Card.Header>
              <Card.Body className="h-350 overflow-auto pb-0 m-b-20">
                <Timeline />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={12} className="media-margin">
            <Card>
              <Card.Header>Support tickets</Card.Header>
              <Card.Body className="p-0 h-350 overflow-auto pb-0 m-b-20">
                <Support />
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Layout>
    );
  }
}

Login.getInitialProps = async (ctx) => {
  // Must validate JWT
  // If the JWT is invalid it must redirect
  // back to the main page. You can do that
  // with Router from 'next/router
  await handleAuthSSR(ctx);

  // Must return an object
  return {}
}

export default Login;
