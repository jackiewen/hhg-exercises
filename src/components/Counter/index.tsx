import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button
} from "react-bootstrap";

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Body
                style={{
                  minHeight: '500px',
                  paddingTop: '80px'
                }}>
                  <h1 className="text-center mb-5" style={{ fontSize: '8rem'}}>{number}</h1>
                  <Row className="justify-content-md-center">
                    <Col md="2" className="d-grid">
                      <Button onClick={() => setNumber(number + 1)}>Increase by 1</Button>
                    </Col>
                    <Col md="2" className="d-grid">
                      <Button variant="secondary" onClick={() => setNumber(0)}>Reset</Button>
                    </Col>
                  </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </Container>
  );
};

export default Counter;