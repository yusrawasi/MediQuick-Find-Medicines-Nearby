import * as React from 'react';
import Link from 'next/link';
import {
  Card,
  DropdownButton,
  Hr,
  ButtonToolbar,
  SplitButton,
  Dropdown,
  ButtonGroup,
  Button,
} from 'react-bootstrap';

class Splitdropdowns extends React.Component {
  render () {
    return (
      <div>
        <Dropdown as={ButtonGroup} className="d-inline-block mr-2 mb-2">
          <Button variant="primary">Split Button</Button>
          <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link href=""><span>Action</span></Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href=""><span>Another action</span></Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href=""><span>Something else</span></Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as={ButtonGroup} className="d-inline-block mr-2 mb-2">
          <Button variant="secondary">Split Button</Button>
          <Dropdown.Toggle
            split
            id="dropdown-split-basic"
            variant="secondary"
          />
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link href=""><span>Action</span></Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href=""><span>Another action</span></Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href=""><span>Something else</span></Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as={ButtonGroup} className="d-inline-block mr-2 mb-2">
          <Button variant="success">Split Button</Button>
          <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link href=""><span>Action</span></Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href=""><span>Another action</span></Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href=""><span>Something else</span></Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as={ButtonGroup} className="d-inline-block mr-2 mb-2">
          <Button variant="info">Split Button</Button>
          <Dropdown.Toggle split variant="info" id="dropdown-split-basic" />
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link href=""><span>Action</span></Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href=""><span>Another action</span></Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href=""><span>Something else</span></Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as={ButtonGroup} className="d-inline-block mr-2 mb-2">
          <Button variant="warning" className="text-white">Split Button</Button>
          <Dropdown.Toggle
            split
            variant="warning"
            id="dropdown-split-basic"
            className="text-white"
          />
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link href=""><span>Action</span></Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href=""><span>Another action</span></Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href=""><span>Something else</span></Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as={ButtonGroup} className="d-inline-block mr-2 mb-2">
          <Button variant="danger">Split Button</Button>
          <Dropdown.Toggle
            split
            variant="danger"
            id="dropdown-split-basic"
            className="circle-btns"
          />
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link href=""><span>Action</span></Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href=""><span>Another action</span></Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href=""><span>Something else</span></Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <hr />

        <Dropdown as={ButtonGroup} className="d-inline-block mr-2 mb-2">
          <Button variant="outline-primary">Split Button</Button>
          <Dropdown.Toggle
            split
            variant="outline-primary"
            id="dropdown-split-basic"
          />
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link href=""><span>Action</span></Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href=""><span>Another action</span></Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href=""><span>Something else</span></Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as={ButtonGroup} className="d-inline-block mr-2 mb-2">
          <Button variant="outline-secondary">Split Button</Button>
          <Dropdown.Toggle
            split
            variant="outline-secondary"
            id="dropdown-split-basic"
          />
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link href=""><span>Action</span></Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href=""><span>Another action</span></Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href=""><span>Something else</span></Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as={ButtonGroup} className="d-inline-block mr-2 mb-2">
          <Button variant="outline-success">Split Button</Button>
          <Dropdown.Toggle
            split
            variant="outline-success"
            id="dropdown-split-basic"
          />
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link href=""><span>Action</span></Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href=""><span>Another action</span></Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href=""><span>Something else</span></Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as={ButtonGroup} className="d-inline-block mr-2 mb-2">
          <Button variant="outline-info">Split Button</Button>
          <Dropdown.Toggle
            split
            variant="outline-info"
            id="dropdown-split-basic"
          />
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link href=""><span>Action</span></Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href=""><span>Another action</span></Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href=""><span>Something else</span></Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as={ButtonGroup} className="d-inline-block mr-2 mb-2">
          <Button variant="outline-warning">Split Button</Button>
          <Dropdown.Toggle
            split
            variant="outline-warning"
            id="dropdown-split-basic"
          />
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link href=""><span>Action</span></Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href=""><span>Another action</span></Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href=""><span>Something else</span></Link>
            </Dropdown.Item>
            <Dropdown.Item hred="">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as={ButtonGroup} className="d-inline-block mr-2 mb-2">
          <Button variant="outline-danger">Split Button</Button>
          <Dropdown.Toggle
            split
            variant="outline-danger"
            id="dropdown-split-basic"
          />
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link href=""><span>Action</span></Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href=""><span>Another action</span></Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href=""><span>Something else</span></Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      </div>
    );
  }
}
export default Splitdropdowns;
