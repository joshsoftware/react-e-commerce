import React from 'react';
import { Col } from 'reactstrap';
import PropTypes from 'prop-types';

const ColumnWrapper = ({ data, className, xs, sm, md, lg, xl, widths }) => {
  return (
    <Col xs={xs} className={className} sm={sm} md={md} lg={lg} xl={xl} widths={widths}>
      {data}
    </Col>
  );
};

export default ColumnWrapper;

const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    order: stringOrNumberProp,
    offset: stringOrNumberProp
  })
]);

ColumnWrapper.propTypes = {
  className: PropTypes.string,
  data: PropTypes.oneOfType([PropTypes.element, PropTypes.array, PropTypes.object]),
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  widths: PropTypes.array
};
