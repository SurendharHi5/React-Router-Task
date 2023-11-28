import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Bike() {
  return (
    <div>
        <Row xs={1} md={3} className="g-4 m-4" >
      {Array.from({ length: 9 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="src/images/bike.jpg" />
            <Card.Body>
              <Card.Title>Bike</Card.Title>
              <Card.Text>
              Harley davidson bobber motorcycle
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  )
}

export default Bike