import React from 'react';
import { Card, CardBody } from 'reactstrap';
import LoginForm from './LoginForm';

const FormCard = ({ type }) => {
  if (type === 'registration') {
    return (
      <Card>
        <CardBody>{/* <RegistrationForm /> */}</CardBody>
      </Card>
    );
  } else {
    return (
      <Card>
        <CardBody>
          <h3>Login</h3>
          <hr />
          <LoginForm />
        </CardBody>
      </Card>
    );
  }
};

export default FormCard;
