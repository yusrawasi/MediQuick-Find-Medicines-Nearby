import * as React from 'react';
import Link from 'next/link';
import {
  ButtonGroup,
  Button,
  ButtonToolbar,
  Dropdown,
  DropdownButton,
  Row,
  Col,
} from 'react-bootstrap';

class Buttongroup extends React.Component {
  render () {
    return (
      <Row>
        <Col lg={8} md={12}>
          <ButtonGroup aria-label="Basic example">
            <Button variant="primary">Left</Button>
            <Button variant="primary">Middle</Button>
            <Button variant="primary">Right</Button>
          </ButtonGroup>
          <hr />
          <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="mr-2" aria-label="First group">
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>4</Button>
            </ButtonGroup>
            <ButtonGroup
              className="mr-2 xs-pt-15 md-pt-0"
              aria-label="Second group"
            >
              <Button>5</Button>
              <Button>6</Button>
              <Button>7</Button>
            </ButtonGroup>
            <ButtonGroup aria-label="Third group" className=" xs-pt-15 md-pt-0">
              <Button>8</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Col>
        <Col lg={4} md={12} className="text-center xs-pt-15 lg-pt-0">
          <ButtonGroup vertical>
            <Button className="mb-2">Button</Button>
            <DropdownButton
              className="mb-2"
              as={ButtonGroup}
              title="Dropdown"
              id="bg-vertical-dropdown-1"
            >
              <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            </DropdownButton>
            <Button className="mb-2">Button</Button>
            <DropdownButton
              className="mb-2"
              as={ButtonGroup}
              title="Dropdown"
              id="bg-vertical-dropdown-2"
            >
              <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
              <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
        </Col>
      </Row>
    );

    // <h4>Button Groups with Dropdowns</h4>
    // <div className="btn-group pb-3">
    //     <button type="button" className="btn primaryBg border-0 no-radius-btn">Primary</button>
    //     <button type="button" className="btn btn-info border-0">Info</button>
    //     <button type="button" className="btn btn-warning border-0 text-white">Warning</button>
    //     <button type="button" className="btn btn-danger border-0 no-radius-btn">Danger</button>
    // </div>
  }
}
export default Buttongroup;
