import * as React from 'react';
import Link from 'next/link';
import Workchart from './WorkBarchart';
import {Table, Form, ProgressBar} from 'react-bootstrap';

class WorkProgress extends React.Component {
  render () {
    return (
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Medicine Name</th>
              <th>Customer</th>
              <th>Progress</th>
              <th>Total</th>
              <th>Order Status</th>
              <th />
            </tr>
          </thead>
          <tbody className="h-245 overflow-auto d-block">
            <tr>
              <td>
                <Form>
                  <Form.Group controlId="projectcheck" className="mb-0">
                    <Form.Check type="checkbox" />
                  </Form.Group>
                </Form>
              </td>
              <td>Panadol</td>
              <td>Customer 1</td>
              <td>
                <ProgressBar now={70} className="more-70" />
                <span>70%</span>
              </td>
              <td>Rs. 50,000</td>
              <td>
                <span className="badge badge-primary p-1">Pending</span>
              </td>
              <td><Workchart /></td>
            </tr>
            <tr>
              <td>
                <Form>
                  <Form.Group controlId="projectcheck" className="mb-0">
                    <Form.Check type="checkbox" />
                  </Form.Group>
                </Form>
              </td>
              <td>Panadol</td>
              <td>Customer 1</td>
              <td>
                <ProgressBar now={60} className="more-60" />
                <span>60%</span>
              </td>
              <td>Rs. 50,000</td>
              <td><span className="badge badge-green p-1">Delivered</span></td>
              <td><Workchart /></td>
            </tr>
            <tr>
              <td>
                <Form>
                  <Form.Group controlId="projectcheck" className="mb-0">
                    <Form.Check type="checkbox" />
                  </Form.Group>
                </Form>
              </td>
              <td>Panadol</td>
              <td>Customer 1</td>
              <td>
                <ProgressBar now={35} className="less-40" />
                <span>35%</span>
              </td>
              <td>Rs. 50,000</td>
              <td><span className="badge badge-red p-1">Cancelled</span></td>
              <td><Workchart /></td>
            </tr>
            <tr>
              <td>
                <Form>
                  <Form.Group controlId="projectcheck" className="mb-0">
                    <Form.Check type="checkbox" />
                  </Form.Group>
                </Form>
              </td>
              <td>Panadol</td>
              <td>Customer 1</td>
              <td>
                <ProgressBar now={35} className="less-40" />
                <span>35%</span>
              </td>
              <td>Rs. 50,000</td>
              <td><span className="badge badge-darkgreen p-1">Dispatched</span></td>
              <td><Workchart /></td>
            </tr>
            <tr>
              <td>
                <Form>
                  <Form.Group controlId="projectcheck" className="mb-0">
                    <Form.Check type="checkbox" />
                  </Form.Group>
                </Form>
              </td>
              <td>Panadol</td>
              <td>Customer 1</td>
              <td>
                <ProgressBar now={70} className="more-70" />
                <span>70%</span>
              </td>
              <td>Rs. 50,000</td>
              <td>
                <span className="badge badge-primary p-1">Marketing</span>
              </td>
              <td><Workchart /></td>
            </tr>
            <tr>
              <td>
                <Form>
                  <Form.Group controlId="projectcheck" className="mb-0">
                    <Form.Check type="checkbox" />
                  </Form.Group>
                </Form>
              </td>
              <td>Panadol</td>
              <td>Customer 1</td>
              <td>
                <ProgressBar now={60} className="more-60" />
                <span>60%</span>
              </td>
              <td>Rs. 50,000</td>
              <td><span className="badge badge-green p-1">Finance</span></td>
              <td><Workchart /></td>
            </tr>
            <tr>
              <td>
                <Form>
                  <Form.Group controlId="projectcheck" className="mb-0">
                    <Form.Check type="checkbox" />
                  </Form.Group>
                </Form>
              </td>
              <td>Panadol</td>
              <td>Customer 1</td>
              <td>
                <ProgressBar now={35} className="less-40" />
                <span>35%</span>
              </td>
              <td>Rs. 50,000</td>
              <td><span className="badge badge-red p-1">Development</span></td>
              <td><Workchart /></td>
            </tr>
            <tr>
              <td>
                <Form>
                  <Form.Group controlId="projectcheck" className="mb-0">
                    <Form.Check type="checkbox" />
                  </Form.Group>
                </Form>
              </td>
              <td>Panadol</td>
              <td>Customer 1</td>
              <td>
                <ProgressBar now={35} className="less-40" />
                <span>35%</span>
              </td>
              <td>Rs. 50,000</td>
              <td><span className="badge badge-darkgreen p-1">Design</span></td>
              <td><Workchart /></td>
            </tr>
          </tbody>
        </Table>
        <div className="d-flex justify-content-between mr-4">
          <p className="mb-0 ml-3">Showing 1 - 4 of 20</p>
          <nav>
            <ul className="pagination">
              <li className="page-item mr-2">
                <Link href="">
                  <a className="btn btn-darkgreen rounded-left">
                    <i className="fa fa-angle-left" aria-hidden="true" />
                  </a>
                </Link>
              </li>
              <li className="page-item mr-2">
                <Link href="">
                  <a className="btn btn-darkgreen rounded-right">
                    <i className="fa fa-angle-right" aria-hidden="true" />
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default WorkProgress;
