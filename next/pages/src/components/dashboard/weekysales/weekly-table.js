import * as React from 'react';
import {Table} from 'react-bootstrap';

class WeeklysalesReport extends React.Component {
  render () {
    return (
      <div className="weeklyreport-table">
        <div className="mb-4">
          <p className="mb-0">Total Profit</p>
          <p className="profit-count mb-0">+$47,800</p>
        </div>
        <div className="mb-4">
          <p className="mb-0">Orders</p>
          <p className="order-count mb-0">+$17,800</p>
        </div>
        <div>
          <p className="mb-0">Rejected</p>
          <p className="rejected-count mb-0">+$5,800</p>
        </div>
      </div>
    );
  }
}
export default WeeklysalesReport;
