// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Braille Conversion Tool</h5>
            <p>Enhancing accessibility with AI-driven technology for the visually impaired.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/features" className="footer-link">Features</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com" className="footer-link">Facebook</a> | 
              <a href="https://twitter.com" className="footer-link"> Twitter</a> |
              <a href="https://linkedin.com" className="footer-link"> LinkedIn</a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Braille Conversion Tool. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
