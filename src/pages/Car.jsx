import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Car() {
  return (
    <div>
          <Row xs={1} md={4} className="g-4 m-4" >
      {Array.from({ length: 8 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="src/images/car.jpg" alt='Car image'/>
            <Card.Body>
              <Card.Title>Car</Card.Title>
              <Card.Text>
              Classic Recreations' 815HP Continuation 1969 Boss 429 Mustang.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  )
}

export default Car