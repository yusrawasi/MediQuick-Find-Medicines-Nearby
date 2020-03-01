import * as React from 'react';
import {Modal} from 'react-bootstrap';
import Premium from '../../static/images/premium.png';

class ModalPrime extends React.Component {
  render () {
    return (
      <Modal.Body className="p-0">
        <div className="purpleBg d-flex align-items-center justify-content-center flex-column  p-b-50">
          <div><img src={Premium} className="p-t-30 " /></div>
          <h4 className="text-white p-t-15">In Progress</h4>
          <p>To be delivered in the next evaluation</p>
        </div>
        {/* <h5 className="p-t-30 p-b-30 text-center go-prime">
          <a href="https://strapui.com/view/swift-dashboard" target="_blank">
            GO PREMIUM
          </a>
        </h5> */}
      </Modal.Body>
    );
  }
}
export default ModalPrime;
