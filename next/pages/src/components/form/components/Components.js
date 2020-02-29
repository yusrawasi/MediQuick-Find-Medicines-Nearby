import * as React from 'react';
import {nputGroup, Form, Row, Col, InputGroup} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import NoSSR from 'react-no-ssr';

class Fcomponents extends React.Component {
  state = {
    startDate: new Date (),
  };
  constructor (props) {
    super (props);
    this.state = {
      startDate: new Date (),
    };
    this.handleChange = this.handleChange.bind (this);
  }
  componentDidMount () {
    if (typeof window !== 'undefined') {
      require ('react-datepicker');
    }
    if (typeof window === 'undefined') {
      global.window = {};
    }
  }
  handleChange (date) {
    this.setState ({
      startDate: date,
    });
  }
  render () {
    return (
      <Form className="form-container">
        <Form.Group as={Row} controlId="formNormal">
          <Form.Label column sm="2" className="text-right pr-0">
            Normal
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" className="rounded-0" />
          </Col>
        </Form.Group>

        <hr />

        <Form.Group as={Row} controlId="formPassword">
          <Form.Label column sm="2" className="text-right pr-0">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              placeholder="Password"
              className="rounded-0"
            />
          </Col>
        </Form.Group>

        <hr />

        <Form.Group as={Row} controlId="formHelptext">
          <Form.Label column sm="2" className="text-right pr-0">
            Help Text
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Help Text"
              className="rounded-0"
            />
            <Form.Text className="text-muted">
              Example block-level help text here.
            </Form.Text>
          </Col>
        </Form.Group>

        <hr />

        <Form.Group as={Row} controlId="formPlaceholder">
          <Form.Label column sm="2" className="text-right pr-0">
            Placeholder
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Placeholder"
              className="rounded-0"
            />
          </Col>
        </Form.Group>

        <hr />

        <Form.Group
          as={Row}
          controlId="formunderline"
          className="form-underline"
        >
          <Form.Label column sm="2" className="text-right pr-0">
            Line
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Line"
              className="input-underlined rounded-0"
            />
          </Col>
        </Form.Group>

        <hr />

        <Form.Group as={Row} controlId="formDisabled">
          <Form.Label column sm="2" className="text-right pr-0">
            Diasabled
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Disabled Input Form"
              disabled
              className="rounded-0"
            />
          </Col>
        </Form.Group>

        <hr />

        <Form.Group as={Row} controlId="formStatictext">
          <Form.Label column sm="2" className="text-right pr-0">
            Static Text
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="email@example.com" />
          </Col>
        </Form.Group>

        <hr />

        <Form.Group as={Row} controlId="formCheckboxnreadio">
          <Form.Label column sm="2" className="text-right pr-0">
            Checkbox and Radio
          </Form.Label>
          <Col sm="10">
            {['checkbox', 'radio'].map (type => (
              <div key={`default-${type}`} className="mb-2">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label="Option one is this and that - be sure to include why it's great"
                />

                <Form.Check
                  disabled
                  type={type}
                  label="Option two is disabled"
                  id={`disabled-default-${type}`}
                />
              </div>
            ))}
          </Col>
        </Form.Group>

        <hr />

        <Form.Group
          as={Row}
          controlId="formButtonswitch"
          className="custom-checkboxes"
        >
          <Form.Label column sm="2" className="text-right pr-0">
            Button Switch
          </Form.Label>
          <Col sm="10" className="slider-switch">
            <label className="switch mr-2 position-relative d-inline-block">
              <input type="checkbox" />
              <span className="slider position-absolute" />
            </label>

            <label className="switch position-relative d-inline-block">
              <input type="checkbox" />
              <span className="slider round position-absolute" />
            </label>
          </Col>
        </Form.Group>

        <hr />

        <Form.Group as={Row} controlId="FormSelect">
          <Form.Label column sm="2" className="text-right pr-0">
            Select
          </Form.Label>
          <Col sm="10">
            <Form.Control as="select" className="rounded-0">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <hr />

        <Form.Group as={Row} controlId="FormMultipleselect">
          <Form.Label column sm="2" className="text-right pr-0">
            Multiple Select
          </Form.Label>
          <Col sm="10">
            <Form.Control className="rounded-0" as="select" multiple>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <hr />

        <Form.Group as={Row} controlId="formSuccess">
          <Form.Label column sm="2" className="text-right text-success pr-0">
            Input with Success
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              className="border border-success rounded-0"
            />
          </Col>
        </Form.Group>

        <hr />

        <Form.Group as={Row} controlId="formWarning">
          <Form.Label column sm="2" className="text-right text-warning pr-0">
            Input with Warning
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              className="border border-warning rounded-0 "
            />
          </Col>
        </Form.Group>

        <hr />

        <Form.Group as={Row} controlId="formDanger">
          <Form.Label column sm="2" className="text-right text-danger pr-0">
            Input with Danger
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              className="border border-danger rounded-0"
            />
          </Col>
        </Form.Group>

        <hr />

        <Form.Group as={Row} controlId="formControlSizing">
          <Form.Label column sm="2" className="text-right pr-0">
            Control Sizing
          </Form.Label>
          <Col sm="10">
            <Form.Control
              size="lg"
              type="text"
              placeholder="Large Input Form"
              className="rounded-0"
            />
            <br />
            <Form.Control
              type="text"
              placeholder="Normal Input Form"
              className="rounded-0"
            />
            <br />
            <Form.Control
              size="sm"
              type="text"
              placeholder="Small Input Form"
              className="rounded-0"
            />
          </Col>
        </Form.Group>

        <hr />

        <Form.Group as={Row} controlId="ormColumnSizing">
          <Form.Label column sm="2" className="text-right pr-0">
            Column Sizing
          </Form.Label>
          <Col sm="10">
            <Row>
              <Col xs={2}>
                <Form.Control
                  type="text"
                  placeholder="col-sm-2"
                  className="rounded-0"
                />
              </Col>
              <Col xs={3}>
                <Form.Control
                  type="text"
                  placeholder="col-sm-3"
                  className="rounded-0"
                />
              </Col>
              <Col xs={5}>
                <Form.Control
                  type="text"
                  placeholder="col-sm-5"
                  className="rounded-0"
                />
              </Col>
            </Row>
          </Col>
        </Form.Group>

        <hr />

        <Form.Group as={Row} controlId="formInputgroup">
          <Form.Label column sm="2" className="text-right pr-0">
            Input Group
          </Form.Label>
          <Col sm="10">
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend" className="rounded-0">
                  @
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
                className="rounded-0"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <Form.Control
                aria-describedby="basic-addon2"
                className="rounded-0"
              />
              <InputGroup.Append>
                <InputGroup.Text id="basic-addon2" className="rounded-0">
                  .00
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text className="rounded-0">$</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                aria-label="Amount (to the nearest dollar)"
                className="rounded-0"
              />
              <InputGroup.Append>
                <InputGroup.Text className="rounded-0">.00</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Form.Group>

        <hr />

        <Form.Group as={Row} controlId="formButtonaddons">
          <Form.Label column sm="2" className="text-right pr-0">
            Button Addons
          </Form.Label>
          <Col sm="10">
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend" className="rounded-0">
                  Go!
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                aria-describedby="inputGroupPrepend"
                required
                className="rounded-0"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <Form.Control
                aria-describedby="basic-addon2"
                className="rounded-0"
              />
              <InputGroup.Append>
                <InputGroup.Text id="basic-addon2" className="rounded-0">
                  Go!
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Form.Group>

        <hr />

        <Form.Group as={Row} controlId="formDatepicker">
          <Form.Label column sm="2" className="text-right pr-0">
            Date Picker
          </Form.Label>
          <Col sm="10" className="form-calender">
            <NoSSR>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                className="form-control rounded-0"
              />
            </NoSSR>
          </Col>
        </Form.Group>

      </Form>
    );
  }
}
export default Fcomponents;
