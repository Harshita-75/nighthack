// src/pages/Features.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles.css'; // Import the CSS file

const Features = () => {
  return (
    <div className="features-background">
      <Container className="features-content">
        <h1 className="features-title">Our Key Features</h1>
        <Row>
          <Col md={4}>
            <Card className="feature-card">
              <Card.Img variant="top" src="https://th.bing.com/th/id/OIP._pNMTAIcq-OkcAwAIKfZVQHaE8?rs=1&pid=ImgDetMain" alt="Feature 1" />
              <Card.Body>
                <Card.Title>Feature 1</Card.Title>
                <Card.Text>
                  Accurate text-to-Braille conversion for seamless accessibility.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="feature-card">
              <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.0oDdkRtv37DdjszUOf1n8AHaFj?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Feature 2" />
              <Card.Body>
                <Card.Title>Feature 2</Card.Title>
                <Card.Text>
                  Supports image and document conversion for versatile use.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="feature-card">
              <Card.Img variant="top" src="https://th.bing.com/th/id/R.bea805bb2b8bab5f091feb4592e83c9f?rik=wYhddtiRt1ZmOw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-lWQZyU3COeM%2fTeJvREPya8I%2fAAAAAAAAAMs%2fnYQIbVavQ5Y%2fs1600%2fBraile%2b00013545.jpg&ehk=jF4mVDQQGivXwQ9prRXwmyV6l06a42Dk5e%2blw%2bJQ03Y%3d&risl=&pid=ImgRaw&r=0" alt="Feature 3" />
              <Card.Body>
                <Card.Title>Feature 3</Card.Title>
                <Card.Text>
                  Accessible on various devices for maximum reach and flexibility.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Features;
