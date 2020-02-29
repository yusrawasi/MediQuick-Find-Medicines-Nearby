import * as React from 'react';
import Link from 'next/link';
import {Card, Table, Hr, Breadcrumb} from 'react-bootstrap';

class Breadcrumbs extends React.Component {
  render () {
    return (
      <div>
        <Breadcrumb className="theme-shadow p-2 mb-3">
          <Breadcrumb.Item>
            <Link href=""><span>Home</span></Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href=""><span>Library</span></Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
        <Breadcrumb className="theme-shadow p-2 float-right">
          <Breadcrumb.Item active>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href=""><span>Library</span></Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href=""><span><i className="fa fa-home" /></span></Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}
export default Breadcrumbs;
