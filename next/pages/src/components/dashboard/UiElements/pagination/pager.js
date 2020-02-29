import * as React from 'react';
import Link from 'next/link';
import {Card, Table, Pagination} from 'react-bootstrap';

class Pager extends React.Component {
  render () {
    return (
      <div>
        <div>
          <Pagination className="component-pagination justify-content-center">
            <Pagination.Prev className="mr-2">
              <i className="fa fa-angle-double-left mr-2" /> Previous
            </Pagination.Prev>
            <Pagination.Next>
              {' '}Next <i className="fa fa-angle-double-right ml-2" />
            </Pagination.Next>
          </Pagination>
        </div>
        <div>
          <Pagination className="component-pagination justify-content-between bent-link">
            <Pagination.Prev className="mr-2">
              <i className="fa fa-angle-double-left mr-2" /> Older
            </Pagination.Prev>
            <Pagination.Next>
              {' '}Newer <i className="fa fa-angle-double-right mr-2" />
            </Pagination.Next>
          </Pagination>
        </div>
      </div>
    );
  }
}
export default Pager;
