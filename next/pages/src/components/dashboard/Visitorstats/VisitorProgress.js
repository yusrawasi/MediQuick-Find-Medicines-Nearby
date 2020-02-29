import * as React from 'react';
import {ProgressBar} from 'react-bootstrap';

class VisitorProgress extends React.Component {
  render () {
    return (
      <div className="vistorstats d-flex justify-content-between mt-3 flex-wrap">
        <div>
          <p className="m-0">Today</p>
          <p className="text-sm">Last Week Rise by 62%</p>
          <ProgressBar now={60} />
        </div>
        <div>
          <p className="m-0">Last week</p>
          <p className="text-sm">Last Week Rise by 52%</p>
          <ProgressBar now={52} />
        </div>
        <div>
          <p className="m-0">Last month</p>
          <p className="text-sm">Last Week Rise by 12%</p>
          <ProgressBar now={12} />
        </div>
      </div>
    );
  }
}
export default VisitorProgress;
