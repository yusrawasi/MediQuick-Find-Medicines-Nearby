import * as React from 'react';
import Link from 'next/link';
import {Card, Table, Pagination} from 'react-bootstrap';

class Paginationsizes extends React.Component {
  render () {
    return (
      <div>
        <div className="d-none d-md-block">
          <Pagination className="component-pagination" size="lg">
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </div>
        <div className="text-center">
          <Pagination className="component-pagination">
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </div>
        <div>
          <Pagination className="component-pagination" size="sm">
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </div>
      </div>
    );
  }
}
export default Paginationsizes;
