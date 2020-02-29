import * as React from 'react';
import Link from 'next/link';
import {Card, Table, Hr} from 'react-bootstrap';

class Buttonicons extends React.Component {
  render () {
    return (
      <div>
        <button
          type="button"
          className="btn bg-sky-blue text-white circ-btns mr-2 mb-2"
        >
          <i className="fa fa-twitter" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="btn bg-info text-white circ-btns mr-2 mb-2"
        >
          <i className="fa fa-facebook" aria-hidden="true" />
        </button>
        <button type="button" className="btn bg-warning text-white  mr-2 mb-2">
          Download <i className="fa fa-download" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="btn btn-outline-success mr-2 circle-btns mb-2"
        >
          <i className="fa fa-plus" aria-hidden="true" /> View more
        </button>
        <button type="button" className="btn bg-danger text-white mb-2">
          <i className="fa fa-phone" aria-hidden="true" /> Call us!
        </button>
      </div>
    );
  }
}
export default Buttonicons;
