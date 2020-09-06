import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';

const ContainerWrapper = ({ styleClass, data, fluid }) => {
  return (
    <Container className={styleClass} fluid={fluid}>
      {data}
    </Container>
  );
};

export default ContainerWrapper;

ContainerWrapper.propTypes = {
  styleClass: PropTypes.string,
  data: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  fluid: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};
