import * as React from 'react';
import Link from 'next/link';
import {Card, Carousel} from 'react-bootstrap';

class Carouselslides extends React.Component {
  render () {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../static/images/slider0.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../static/images/slider1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../static/images/slider2.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../static/images/slider3.jpg"
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
export default Carouselslides;
