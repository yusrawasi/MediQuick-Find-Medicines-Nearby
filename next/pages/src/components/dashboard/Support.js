import * as React from "react";
import {ListGroup} from "react-bootstrap";



class Index extends React.Component {

  render() {
      
      return (
        <ListGroup variant="flush" className="deal">
            <ListGroup.Item className="d-flex justify-content-center flex-column">
              <div className="d-flex align-items-center"> 
                  <img src="./static/images/smith.png" className="rounded-circle" style={{width:"48px"}}/>
                  <div className="ml-3">
                    <p className="m-0">John Smith</p>
                    <p className="text-sm">Bangalore, India</p> 
                  </div>
                  <span className="badge badge-primary ml-auto p-1">Progress</span>
              </div>
              <div className="mt-2">
                  <p className="text-md mb-0">Lorem ipsum dolor sit amet,consectetuer edipiscin elit, sed </p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-center flex-column">
              <div className="d-flex align-items-center"> 
              <img src="./static/images/katlin.png" className="rounded-circle" style={{width:"48px"}}/>
              <div className="ml-3">
                <p className="m-0">Katlin Smith</p>
                <p className="text-sm">Bangalore, India</p> 
              </div>
              <span className="badge badge-success ml-auto p-1">Open</span>
              </div>
              <div className="mt-2">
                  <p className="text-md mb-0">Lorem ipsum dolor sit amet,consectetuer edipiscin elit, sed </p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-center flex-column">
          <div className="d-flex align-items-center"> 
            <img src="./static/images/william.png" className="rounded-circle" style={{width:"48px"}}/>
            <div className="ml-3">
              <p className="m-0">William saliba</p>
              <p className="text-sm">Bangalore, India</p>
            </div>
            <span className="badge badge-danger ml-auto p-1">Closed</span>
          </div>
          <div className="mt-2">
          <p className="text-md mb-0">Lorem ipsum dolor sit amet,consectetuer edipiscin elit, sed </p>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-center flex-column">
              <div className="d-flex align-items-center"> 
                  <img src="./static/images/smith.png" className="rounded-circle" style={{width:"48px"}}/>
                  <div className="ml-3">
                    <p className="m-0">John S</p>
                    <p className="text-sm">Bangalore, India</p> 
                  </div>
                  <span className="badge badge-primary ml-auto p-1">Progress</span>
              </div>
              <div className="m-t-10">
                  <p className="text-md mb-0">Lorem ipsum dolor sit amet,consectetuer edipiscin elit, sed </p>
              </div>
            </ListGroup.Item>
        </ListGroup>
      );
  }
}
export default Index;