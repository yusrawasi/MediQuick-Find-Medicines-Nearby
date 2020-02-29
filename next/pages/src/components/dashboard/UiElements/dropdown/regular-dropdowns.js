import * as React from 'react';
import Link from 'next/link';
import {
  Card,
  DropdownButton,
  Hr,
  ButtonToolbar,
  SplitButton,
  Dropdown,
} from 'react-bootstrap';

class regulardropdowns extends React.Component {
  render () {
    return (
      <div>
        <Dropdown className="d-inline-block mr-2 mb-2">
          <Dropdown.Toggle id="dropdown-basic" className="bg-primary border-0">
            Button  Dropdown
          </Dropdown.Toggle>
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
        <Dropdown className="d-inline-block mr-2 mb-2">
          <Dropdown.Toggle
            variant="secondary"
            id="dropdown-basic"
            className="circle-btns border-0 primaryBg"
          >
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="">Action</Dropdown.Item>
            <Dropdown.Item href="">Another action</Dropdown.Item>
            <Dropdown.Item href="">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="d-inline-block mr-2 mb-2">
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            className="circle-btns"
          >
            Dropdown Button
          </Dropdown.Toggle>

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
        <Dropdown className="d-inline-block mr-2 mb-2">
          <Dropdown.Toggle
            variant="info"
            id="dropdown-basic"
            className="circle-btns"
          >
            Dropdown Button
          </Dropdown.Toggle>

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
        <Dropdown className="d-inline-block mr-2 mb-2">
          <Dropdown.Toggle
            variant="warning"
            id="dropdown-basic"
            className="circle-btns text-white"
          >
            Dropdown Button
          </Dropdown.Toggle>

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
        <Dropdown className="d-inline-block mr-2 mb-2">
          <Dropdown.Toggle
            variant="danger"
            id="dropdown-basic"
            className="circle-btns"
          >
            Dropdown Button
          </Dropdown.Toggle>

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

        <Dropdown className="d-inline-block mr-2 mb-2">
          <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

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
        <Dropdown className="d-inline-block mr-2 mb-2">
          <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>
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
        <Dropdown className="d-inline-block mr-2 mb-2">
          <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

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
        <Dropdown className="d-inline-block mr-2 mb-2">
          <Dropdown.Toggle variant="outline-info" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

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
        <Dropdown className="d-inline-block mr-2 mb-2">
          <Dropdown.Toggle variant="outline-warning" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

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
        <Dropdown className="d-inline-block mr-2 mb-2">
          <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

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
export default regulardropdowns;
