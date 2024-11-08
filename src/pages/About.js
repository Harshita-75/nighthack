// src/pages/About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about-background">
      <Container className="about-content">
        <Row>
          <Col md={12}>
            <h1 className="about-title">About Our Braille Conversion Tool</h1>
            <p className="about-description">
              Our Braille Conversion Tool is dedicated to making information accessible to visually impaired individuals. With advanced AI-driven technology, we aim to convert text, images, and documents into Braille seamlessly, empowering users with independence and accessibility.
            </p>
          </Col>
        </Row>
        <Row className="about-features">
          <Col md={4}>
            <h3>Feature 1</h3>
            <p>High accuracy text-to-Braille conversion.</p>
          </Col>
          <Col md={4}>
            <h3>Feature 2</h3>
            <p>Supports image and document conversion to Braille.</p>
          </Col>
          <Col md={4}>
            <h3>Feature 3</h3>
            <p>Works seamlessly across various devices.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
