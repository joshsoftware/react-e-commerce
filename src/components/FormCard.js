import React from 'react';
import { Card, CardBody } from 'reactstrap';
import RegistrationForm from './RegistrationForm';
import PropTypes from 'prop-types';
const FormCard = ({ type }) => {
  const FormAttributes = {
    firstname: {
      field: 'exampleFirstName',
      labelText: 'First Name',
      type: 'firstname',
      name: 'firstname',
      placeholder: 'John'
    },
    lastname: {
      field: 'exampleLastName',
      labelText: 'Last Name',
      type: 'lastname',
      name: 'lastname',
      placeholder: 'Doe'
    },
    email: {
      field: 'exampleEmail',
      labelText: 'Email',
      type: 'email',
      name: 'email',
      placeholder: 'example@company.com'
    },
    password: {
      field: 'examplePassword',
      labelText: 'Password',
      type: 'password',
      name: 'password',
      placeholder: 'password'
    },
    country: {
      field: 'exampleCountry',
      labelText: 'Country',
      type: 'country',
      name: 'country',
      placeholder: ''
    },
    state: {
      field: 'exampleState',
      labelText: 'State',
      type: 'state',
      name: 'state',
      placeholder: ''
    },
    city: {
      field: 'exampleCity',
      labelText: 'City',
      type: 'city',
      name: 'city',
      placeholder: ''
    },
    address: {
      field: 'exampleAddress',
      labelText: 'Address',
      type: 'address',
      name: 'address',
      placeholder: ''
    }
  };
  const { firstname, lastname, email, password, country, state, city, address } = FormAttributes;
  if (type === 'registration') {
    return (
      <Card>
        <CardBody>
          <h3>Register</h3>
          <hr />
          <RegistrationForm
            firstname={firstname}
            lastname={lastname}
            email={email}
            password={password}
            country={country}
            state={state}
            city={city}
            address={address}
          />
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
          {/* <LoginForm email={email} password={password}/> */}
          {/* <h6>Not registered? register</h6> */}
        </CardBody>
      </Card>
    );
  }
};

export default FormCard;

FormCard.propTypes = {
  type: PropTypes.string.isRequired
};
