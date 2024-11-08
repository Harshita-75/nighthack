// src/components/CardSection.js
import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const CardSection = () => {
  const features = [
    { title: 'AI-driven Conversion', text: 'Fast and accurate text-to-Braille conversion.' },
    { title: 'Printer Integration', text: 'Supports Braille printers for physical output.' },
    { title: 'Digital Devices', text: 'Access on web and mobile devices.' }
  ];

  return (
    <Container className="my-5">
      <Row>
        {features.map((feature, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Text>{feature.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardSection;
