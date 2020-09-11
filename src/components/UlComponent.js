import React from 'react';
import PropTypes from 'prop-types';

const UlComponent = ({ liElement }) => {
  return <ul className="list-inline">{liElement}</ul>;
};

export default UlComponent;

UlComponent.propTypes = {
  liElement: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
};