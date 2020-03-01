import * as React from 'react';
import {get} from 'lodash';
import Link from 'next/link';
import {Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap';
import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import RightSidebar from '../components/RightSidebar';
import NoSSR from 'react-no-ssr';
import * as styles from '../styles/global.scss';

class LoginLayout extends React.Component {
  render () {
    const title = get (this.props, 'title', ' ');
    const classname = get (this.props, 'classname', ' ');
    return (
      <div className={classname}>
        <Head>
          <html className="theme-light">
            <title>MediQuick -{title}</title>
            <meta charSet="utf-8" />
            <link
              rel="icon"
              href="/static/images/mediquick-logo.png"
              type="image/x-icon"
            />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </html>
        </Head>
        <article style={{padding: '0', margin: '0'}}>
          {' '}{this.props.children}{' '}
        </article>
      </div>
    );
  }
}
export default LoginLayout;
