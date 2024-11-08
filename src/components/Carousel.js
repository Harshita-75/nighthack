// src/components/Carousel.js
import React from 'react';
import { Carousel } from 'react-bootstrap';

const CustomCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/OIP.1_sCGbdBclwleDLSAcNKsQHaDt?w=1800&h=900&rs=1&pid=ImgDetMain"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Convert Text to Braille Seamlessly</h3>
          <p>Enhancing accessibility with AI-driven technology.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.indianexpress.com/2018/01/thinkstockphotos-614531838-e1516617865389.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Empowering the Visually Impaired</h3>
          <p>Access information independently and effortlessly.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;
