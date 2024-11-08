// src/pages/Convert.js
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './Convert.css';

const Convert = () => {
  const [inputType, setInputType] = useState('text');
  const [text, setText] = useState('');
  const [brailleOutput, setBrailleOutput] = useState('');

  const handleInputTypeChange = (event) => {
    setInputType(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleConvert = async () => {
    try {
      const response = await axios.post('http://localhost:5000/convert-to-braille', {
        inputType,
        text,
      });
      setBrailleOutput(response.data.brailleOutput);
    } catch (error) {
      console.error("Error converting to Braille:", error);
      setBrailleOutput("Error converting to Braille.");
    }
  };

  return (
    <Container className="convert-container mt-5">
      <h2 className="text-center">Select Input Type</h2>
      <Row className="justify-content-center mt-4">
        <Col md={8}>
          <Form>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2}>
                Input Type:
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Text"
                  name="inputType"
                  value="text"
                  checked={inputType === 'text'}
                  onChange={handleInputTypeChange}
                />
                <Form.Check
                  type="radio"
                  label="Image"
                  name="inputType"
                  value="image"
                  checked={inputType === 'image'}
                  onChange={handleInputTypeChange}
                />
                <Form.Check
                  type="radio"
                  label="Document"
                  name="inputType"
                  value="document"
                  checked={inputType === 'document'}
                  onChange={handleInputTypeChange}
                />
              </Col>
            </Form.Group>

            {inputType === 'text' && (
              <Form.Group controlId="textInput" className="mt-3">
                <Form.Label>Paste or enter text:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Type here..."
                  value={text}
                  onChange={handleTextChange}
                />
              </Form.Group>
            )}

            <Button variant="primary" className="mt-4" onClick={handleConvert}>
              Start Translation
            </Button>
          </Form>

          {brailleOutput && (
            <div className="mt-5">
              <h4>Braille Output:</h4>
              <p className="braille-output">{brailleOutput}</p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Convert;
