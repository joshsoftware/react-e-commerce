import React from 'react';
import {
  Container,
  Col,
  Row
} from 'reactstrap';
import FormCard from './FormCard';

const RegistrationComponent = () => {
  return (
    <Container style={{ paddingTop: '15vh', paddingBottom: '15vh', minHeight: '50vh' }}>
      <Row>
        <Col sm={{ size: 6, offset: 3 }}>
          <FormCard type={'registration'} />
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationComponent;
