import React from 'react';
import PropTypes from 'prop-types';

const LiComponent = ({ data }) => {
  return <li className="rounded-sm">{data}</li>;
};

export default LiComponent;

LiComponent.propTypes = {
  data: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
};
