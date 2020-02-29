import * as React from "react";
import {ListGroup} from "react-bootstrap";
import Link from "next/link";


class Index extends React.Component {

  render() {
      
      return (
        <ListGroup variant="flush" className="deal">
        <ListGroup.Item className="d-flex align-items-center">
          <img src="/static/images/smith.png" className="rounded-circle" style={{width:"38px"}}/>
          <div className="ml-3">
            <p className="m-0">John Smith</p>
            <p className="text-sm">Bangalore, India</p>
          </div>
          <Link href=""><a className="btn btn-sm ml-auto cmn-btn">View</a></Link>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center">
          <img src="./static/images/katlin.png" className="rounded-circle" style={{width:"38px"}}/>
          <div className="ml-3">
            <p className="m-0">Katlin Smith</p>
            <p className="text-sm">Bangalore, India</p> 
          </div>
          <Link href=""><a className="btn btn-sm ml-auto cmn-btn">View</a></Link>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center">
          <img src="./static/images/william.png" className="rounded-circle" style={{width:"38px"}}/>
          <div className="ml-3">
            <p className="m-0">William saliba</p>
            <p className="text-sm">Bangalore, India</p> 
          </div>
          <Link href=""><a className="btn btn-sm ml-auto cmn-btn">View</a></Link>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center">
          <img src="./static/images/ella.png" className="rounded-circle" style={{width:"38px"}}/>
          <div className="ml-3">
            <p className="m-0">Ella Woodward</p>
            <p className="text-sm">Bangalore, India</p> 
          </div>
          <Link href=""><a className="btn btn-sm ml-auto cmn-btn">View</a></Link>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center">
          <img src="./static/images/user5.png" className="rounded-circle" style={{width:"38px"}}/>
          <div className="ml-3">
            <p className="m-0">Oliver saliba</p>
            <p className="text-sm">Bangalore, India</p> 
          </div>
          <Link href=""><a className="btn btn-sm ml-auto cmn-btn">View</a></Link>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center">
          <img src="./static/images/smith.png" className="rounded-circle" style={{width:"38px"}}/>
          <div className="ml-3">
            <p className="m-0">John Smith</p>
            <p className="text-sm">Bangalore, India</p>
          </div>
          <Link href=""><a className="btn btn-sm ml-auto cmn-btn">View</a></Link>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center">
          <img src="./static/images/katlin.png" className="rounded-circle" style={{width:"38px"}}/>
          <div className="ml-3">
            <p className="m-0">Katlin Smith</p>
            <p className="text-sm">Bangalore, India</p> 
          </div>
          <Link href=""><a className="btn btn-sm ml-auto cmn-btn">View</a></Link>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center">
          <img src="./static/images/william.png" className="rounded-circle" style={{width:"38px"}}/>
          <div className="ml-3">
            <p className="m-0">William saliba</p>
            <p className="text-sm">Bangalore, India</p> 
          </div>
          <Link href=""><a className="btn btn-sm ml-auto cmn-btn">View</a></Link>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center">
          <img src="./static/images/ella.png" className="rounded-circle" style={{width:"38px"}}/>
          <div className="ml-3">
            <p className="m-0">Ella Woodward</p>
            <p className="text-sm">Bangalore, India</p> 
          </div>
          <Link href=""><a className="btn btn-sm ml-auto cmn-btn">View</a></Link>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center">
          <img src="./static/images/user5.png" className="rounded-circle" style={{width:"38px"}}/>
          <div className="ml-3">
            <p className="m-0">Oliver saliba</p>
            <p className="text-sm">Bangalore, India</p> 
          </div>
          <Link href=""><a className="btn btn-sm ml-auto cmn-btn">View</a></Link>
        </ListGroup.Item>
      </ListGroup>
      );
  }
}
export default Index;