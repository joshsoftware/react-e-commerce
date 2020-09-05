import React from 'react';
import { Card, CardBody } from 'reactstrap';
import RegistrationForm from './RegistrationForm';

const FormCard = ({ type }) => {
  if (type === 'registration') {
    return (
      <Card>
        <CardBody>
          <h3>Register</h3>
          <hr />
          <RegistrationForm />
          {/* <h6>Already registered? login</h6> */}
        </CardBody>
      </Card>
    );
  } else {
    return (
      <Card>
        <CardBody>
          <h3>Login</h3>
          <hr />
          {/* <LoginForm /> */}
          {/* <h6>Not registered? register</h6> */}
        </CardBody>
      </Card>
    );
  }
};

export default FormCard;
