import React from 'react';
import { Card } from 'reactstrap';
import { PropTypes } from 'prop-types';

const FormCardComponent = ({ data }) => {
  return <Card>{data}</Card>;
};

export default FormCardComponent;
FormCardComponent.propTypes = {
  data: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
};
