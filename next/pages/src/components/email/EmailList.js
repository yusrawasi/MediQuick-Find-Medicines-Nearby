import * as React from 'react';
import {Button, Form, FormControl, Table} from 'react-bootstrap';
import * as styles from '../../styles/global.scss';

class EmailList extends React.Component {
  render () {
    return (
      <div className="mail-list">
        <div className="list-header d-flex align-items-center">
          <Form className="custom-checkbox">
            <input
              className="custom-mailcheckbox"
              id="selectall"
              type="checkbox"
              value="value1"
            />
            <label for="selectall" />
          </Form>
          <Button
            variant="link"
            className="text-darkgreen"
            data-toggle="tooltip"
            title="Refresh"
          >
            <i className="fa fa-repeat" aria-hidden="true" />
          </Button>
          <Button
            variant="link"
            className="text-darkgreen"
            data-toggle="tooltip"
            title="Mark all as read"
          >
            <i className="fa fa-ellipsis-v" aria-hidden="true" />
          </Button>
          <Button
            variant="link"
            className="text-darkgreen"
            data-toggle="tooltip"
            title="Archive"
            disabled
          >
            <i className="fa fa-folder" aria-hidden="true" />
          </Button>
          <Button
            variant="link"
            className="text-darkgreen"
            data-toggle="tooltip"
            title="Report spam"
            disabled
          >
            <i className="fa fa-exclamation-circle" aria-hidden="true" />
          </Button>
          <Button
            variant="link"
            className="text-darkgreen"
            data-toggle="tooltip"
            title="Delete"
            disabled
          >
            <i className="fa fa-trash" aria-hidden="true" />
          </Button>
          <Button
            variant="link"
            className="text-darkgreen"
            data-toggle="tooltip"
            title="Add Text"
            disabled
          >
            <i className="fa fa-folder" aria-hidden="true" />
          </Button>
          <Button
            variant="link"
            className="text-darkgreen"
            data-toggle="tooltip"
            title="Label"
            disabled
          >
            <i className="fa fa-folder" aria-hidden="true" />
          </Button>
          <Form className="mail-search mr-1 position-relative">
            <FormControl
              type="text"
              placeholder="Search mail"
              className="rounded-0"
            />
            <Button variant="link" className="text-darkgreen position-absolute">
              <i className="fa fa-search" />
            </Button>
          </Form>
          <div className="ml-auto mail-pagination d-flex align-items-center">
            <p className="mb-0 mr-2 d-inline-block">Showing 1 - 20 of 540</p>
            <Button variant="link" className="text-darkgreen p-1">
              <i className="fa fa-angle-left text-xlg" />
            </Button>
            <Button variant="link" className="text-darkgreen p-1">
              <i className="fa fa-angle-right text-xlg" />
            </Button>
          </div>

        </div>
        <Table className="list-body mt-3" borderless>
          <tbody>
            <tr className="unread-mail">
              <td className="mail-actions">
                <Form className="custom-checkbox">
                  <input
                    className="custom-mailcheckbox"
                    id="checkbox-1"
                    type="checkbox"
                    value="value1"
                  />
                  <label for="checkbox-1" />
                </Form>
              </td>
              <td className="mail-actions">
                <Button variant="link" className="text-darkgreen text-xlg">
                  <i className="fa fa-star-o" aria-hidden="true" />
                </Button>
              </td>
              <td className="mail-details">
                <p className="mb-0">Chetan, me (4)</p>
              </td>
              <td className="mail-details">
                <div className="mail-text">
                  <p className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              </td>
              <td className="mail-date">
                <p className="mb-0">June 10</p>
              </td>
            </tr>
            <tr className="unread-mail">
              <td className="mail-actions">
                <Form className="custom-checkbox">
                  <input
                    className="custom-mailcheckbox"
                    id="checkbox-2"
                    type="checkbox"
                    value="value2"
                  />
                  <label for="checkbox-2" />
                </Form>
              </td>
              <td className="mail-actions">
                <Button variant="link" className="text-darkgreen text-xlg">
                  <i className="fa fa-star-o" aria-hidden="true" />
                </Button>
              </td>
              <td className="mail-details">
                <p className="mb-0">Chetan, me (4)</p>
              </td>
              <td className="mail-text">
                <p className="mb-0">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </td>
              <td className="mail-date">
                <p className="mb-0">June 10</p>
              </td>
            </tr>
            <tr>
              <td className="mail-actions">
                <Form className="custom-checkbox">
                  <input
                    className="custom-mailcheckbox"
                    id="checkbox-3"
                    type="checkbox"
                    value="value3"
                  />
                  <label for="checkbox-3" />
                </Form>
              </td>
              <td className="mail-actions">
                <Button variant="link" className="text-darkgreen text-xlg">
                  <i className="fa fa-star-o" aria-hidden="true" />
                </Button>
              </td>
              <td className="mail-details">
                <p className="mailer-details mb-0">Chetan, me (4)</p>
              </td>
              <td className="mail-text">
                <p className="mb-0">
                  <span className="badge badge-primary p-1 mr-2">Finance</span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </td>
              <td className="mail-date">
                <p className="mb-0">June 10</p>
              </td>
            </tr>
            <tr>
              <td className="mail-actions">
                <Form className="custom-checkbox">
                  <input
                    className="custom-mailcheckbox"
                    id="checkbox-4"
                    type="checkbox"
                    value="value4"
                  />
                  <label for="checkbox-4" />
                </Form>
              </td>
              <td className="mail-actions">
                <Button variant="link" className="text-darkgreen text-xlg">
                  <i className="fa fa-star-o" aria-hidden="true" />
                </Button>
              </td>
              <td className="mail-details">
                <p className="mb-0">Chetan, me (4)</p>
              </td>
              <td className="mail-text">
                <p className="mb-0">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </td>
              <td className="mail-date">
                <p className="mb-0">June 10</p>
              </td>
            </tr>
            <tr>
              <td className="mail-actions">
                <Form className="custom-checkbox">
                  <input
                    className="custom-mailcheckbox"
                    id="checkbox-5"
                    type="checkbox"
                    value="value5"
                  />
                  <label for="checkbox-5" />
                </Form>
              </td>
              <td className="mail-actions">
                <Button variant="link" className="text-darkgreen text-xlg">
                  <i className="fa fa-star-o" aria-hidden="true" />
                </Button>
              </td>
              <td className="mail-details">
                <p className="mailer-details mb-0">Chetan, me (4)</p>
              </td>
              <td className="mail-text">
                <p className="mb-0">
                  <span className="badge badge-green p-1 mr-2">Finance</span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </td>
              <td className="mail-date">
                <p className="mb-0">June 10</p>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
export default EmailList;
