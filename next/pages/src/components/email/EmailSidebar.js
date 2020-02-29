import * as React from 'react';
import {Button} from 'react-bootstrap';
import Link from 'next/link';
import * as styles from '../../styles/global.scss';

class EmailSidebar extends React.Component {
  render () {
    return (
      <div className="mail-sidebar">
        <Button className="btn-block bg-darkgreen  border-0 d-flex align-items-center justify-content-center text-xlg">
          <i className="fa fa-plus mr-2" /> Compose
        </Button>
        <ul className="list-unstyled pt-4">
          <li className="active">
            <Link href="" className="d-block">
              <a>
                <p className="mb-0 d-inline-block">Inbox</p>
                <span className="text-md"> (10)</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#" className="d-block">
              <a><p className="mb-0 d-inline-block">Starred</p></a>
            </Link>
          </li>
          <li>
            <Link href="#" className="d-block">
              <a><p className="mb-0 d-inline-block">Snoozed</p></a>
            </Link>
          </li>
          <li>
            <Link href="#" className="d-block">
              <a><p className="mb-0 d-inline-block">Important</p></a>
            </Link>
          </li>
          <li>
            <Link href="#" className="d-block">
              <a><p className="mb-0 d-inline-block">Sent</p></a>
            </Link>
          </li>
          <li>
            <Link href="#" className="d-block">
              <a><p className="mb-0 d-inline-block">Draft</p></a>
            </Link>
          </li>
        </ul>
        <p className="ml-2 label-text">Labels</p>
        <ul className="list-unstyled label-list">
          <li>
            <Link href="#" className="d-flex align-items-center">
              <a className="d-flex align-items-center justify-content-between">
                <p className="mb-0 d-inline-block">Team</p>
                <span className="badge bg-blue d-block rounded-circle" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#" className="d-flex align-items-center">
              <a className="d-flex align-items-center justify-content-between">
                <p className="mb-0 d-inline-block">Friends</p>
                <span className="badge bg-warning d-block rounded-circle" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#" className="d-flex align-items-center">
              <a className="d-flex align-items-center justify-content-between">
                <p className="mb-0 d-inline-block">Family</p>
                <span className="badge bg-darkgreen d-block rounded-circle" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#" className="d-flex align-items-center">
              <a className="d-flex align-items-center justify-content-between">
                <p className="mb-0 d-inline-block">Finance</p>
                <span className="badge bg-primary d-block rounded-circle" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#" className="d-flex align-items-center">
              <a className="d-flex align-items-center justify-content-between">
                <p className="mb-0 d-inline-block">Project Name</p>
                <span className="badge bg-green d-block rounded-circle" />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default EmailSidebar;
