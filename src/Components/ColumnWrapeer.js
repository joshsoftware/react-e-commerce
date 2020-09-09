import React from 'react';
import { Col } from 'reactstrap';
import Proptypes from 'prop-types';

const ColumnWrapper = ({ data, xs, sm, md, lg, xl, widths }) => {
  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} widths={widths}>
      {data}
    </Col>
  );
};
export default ColumnWrapper;

const stringOrNumberProp = Proptypes.oneOfType([Proptypes.number, Proptypes.string]);
const columnProps = Proptypes.oneOfType([
  Proptypes.string,
  Proptypes.number,
  Proptypes.bool,
  Proptypes.shape({
    size: Proptypes.oneOfType([Proptypes.bool, Proptypes.number, Proptypes.string]),
    order: stringOrNumberProp,
    offset: stringOrNumberProp
  })
]);

ColumnWrapper.propTypes = {
  data: Proptypes.oneOfType([Proptypes.element, Proptypes.array, Proptypes.object]),
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  widths: Proptypes.array
};
