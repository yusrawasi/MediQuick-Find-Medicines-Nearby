import * as React from 'react';
import Link from 'next/link';
import {Card, Table, Pagination} from 'react-bootstrap';

class Cpagination extends React.Component {
  render () {
    return (
      <div>
        <div>
          <Pagination className="component-pagination">
            <Pagination.First className="text-white" />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item active>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
        <div className="text-center">
          <Pagination className="component-pagination  justify-content-center">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item active>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
        <div className=" d-none d-md-block">
          <Pagination className="component-pagination  justify-content-end">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item active>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{7}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
      </div>
    );
  }
}
export default Cpagination;
