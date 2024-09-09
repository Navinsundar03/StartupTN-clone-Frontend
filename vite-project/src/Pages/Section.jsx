import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function OrderingExample() {
  return (
    <Container>
      <Row>
        <Col xs><img width="60%" src="https://startuptn.in/images/Banner/cm-stalin.webp" alt="" /></Col>
        <Col xs={{ order: 5 }}>
         <h1 >“We have set ourselves an ambitious target of becoming a $1 Trillion economy by 2030”</h1>
         <h4>- Thiru. M.K. Stalin</h4>
         <h6>Hon'ble Chief Minister of Tamil Nadu</h6>
        </Col>
      </Row>
    </Container>
  );
}

export default OrderingExample;
