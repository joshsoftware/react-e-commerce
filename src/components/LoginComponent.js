import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import FormCard from './FormCard';

const LoginComponent = () => {
  return (
    <Container style={{ paddingTop: '15vh', paddingBottom: '15vh', minHeight: '50vh' }}>
      <Row>
        <Col sm={{ size: 6, offset: 3 }}>
          <FormCard type={'login'} />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginComponent;
